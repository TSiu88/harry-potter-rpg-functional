import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Character } from './character.js';
import { Duel } from './duel';

function displayStats(character1, character2) {
  $("form").hide();
  $("#stats-display").show();

  $("#character1-name-disp").text(character1.name);
  $("#character2-name-disp").text(character2.name);
  $("#character1-level-disp").text(character1.level);
  $("#character2-level-disp").text(character2.level);
  $("#character1-health-disp").text(character1.health);
  $("#character2-health-disp").text(character2.health);
  $("#character1-house-disp").text(character1.house);
  $("#character2-house-disp").text(character2.house);
  $("#character1-personality-disp").text(character1.personality.join(", "));
  $("#character2-personality-disp").text(character2.personality.join(", "));
}

function displayTurn(duel) {
  let turnChar = duel.characters[duel.turn];
  $("#duel-status").append(`<p>${turnChar.name}'s Turn</p>`);
  if (turnChar === duel.characters[0]) {
    $("#character2-buttons button").attr("disabled", true);
    $("#character1-buttons button").attr("disabled", false);
  } else {
    $("#character1-buttons button").attr("disabled", true);
    $("#character2-buttons button").attr("disabled", false);
  }
}

function attackSequence(duel) {
  let attacker = duel.characters[duel.turn];
  let defender;
  attacker === duel.characters[0] ? defender = duel.characters[1] : defender = duel.characters[0];  
  let spell = attacker.castSpell();
  duel.switchTurn();
  if (spell === "hit"){
    let isWeaker = checkWeaker(attacker, defender);
    let damage = attacker.getStrength(isWeaker);
    defender.takeDamage(damage);
    if (duel.checkForWinner(attacker, defender)){
      $("#attack-buttons").hide();
      $("#start-duel").show();
      $("#duel-status").empty();
      $("#duel-status").text(`${damage} damage!`);
      $("#duel-status").append(`<p>${attacker.name} Wins!</p>`);
    } else {
      $("#duel-status").text(`${damage} damage!`);
      displayTurn(duel);
    }
  } else {
    $("#duel-status").text(`${spell}!`);
    displayTurn(duel);
  } 
}

function checkWeaker(attacker, defender){
  if (attacker.level < defender.level){
    return true;
  }else{
    return false;
  }
}

$(document).ready(function(){
  $("#stats-display").hide();
  $("#attack-buttons").hide();
  let character1;
  let character2;
  let duel;

  $("#create-btn").click(function(event){
    event.preventDefault();
    // Save user input as variables
    let char1Name = $("#character1-name").val();
    let char2Name = $("#character2-name").val();
    let char1House = $("#character1-house").val();
    let char2House = $("#character2-house").val();
    let char1Gender = $("input:radio[name=gender1]:checked").val();
    let char2Gender = $("input:radio[name=gender2]:checked").val();
    // Display gendered wizard img
    $("#character1-img").addClass(char1Gender);
    $("#character2-img").addClass(char2Gender);
    // Display player's stats
    if (char1Name && char2Name) {
      character1 = new Character(char1Name, char1House);
      character2 = new Character(char2Name, char2House);
      duel = new Duel(character1, character2);
      displayStats(character1, character2);
    }
  });

  $("#start-duel").click(function(event){
    event.preventDefault();
    $("#duel-status").empty();
    $("#attack-buttons").show();
    $("#start-duel").hide();
    duel.resetDuel();
    displayTurn(duel);
    displayStats(character1, character2);
  });

  $(".attack-btn").click(function(event){
    event.preventDefault();
    attackSequence(duel);
    displayStats(character1, character2);
  });

  $(".flee-btn").click(function(event){
    event.preventDefault();
    displayTurn(duel);
    $("#duel-status").append(`<p>Flee!</p>`);
    $("#attack-buttons").hide();
    $("#start-duel").show();
  });

});

