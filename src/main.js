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
  $("#character1-personality-disp").text(character1.personality);
  $("#character2-personality-disp").text(character2.personality);
}

function displayTurn(duel) {
  let turnChar = duel.characters[duel.turn];
  $("#duel-status").text(`${turnChar.name}'s Turn`);
  if (turnChar === duel.characters[0]) {
    $("#character2-buttons button").attr("disabled", true);
    $("#character1-buttons button").attr("disabled", false);
  } else {
    $("#character1-buttons button").attr("disabled", true);
    $("#character2-buttons button").attr("disabled", false);
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
      displayStats(character1, character2);
    }
  });

  $("#start-duel").click(function(event){
    event.preventDefault();
    $("#attack-buttons").show();
    $("#start-duel").hide();
    duel = new Duel(character1, character2);
    displayTurn(duel);
  });

  $(".attack-btn").click(function(event){
    event.preventDefault();
    let attacker = duel.characters[duel.turn];
    let defender;
    attacker === character1 ? defender = character2 : defender = character1;  
    let spell = attacker.castSpell();
    duel.switchTurn();
    if (spell === "hit"){
      defender.takeDamage(attacker.level);
      if (duel.checkForWinner(attacker, defender)){
        duel.endDuel();
        $("#attack-buttons").hide();
        $("#start-duel").show();
        $("#duel-status").text(`${attacker.name} Wins!`);
      } else {
        displayTurn(duel);
        $("#duel-status").append(`<p>${spell}</p>`);
      }
    } else {
      displayTurn(duel);
      $("#duel-status").append(`<p>${spell}</p>`);
    } 
    displayStats(character1, character2);
  });

});


///// NOTES
// Reset stats after "start duel" button is clicked so you can see loser get to 0 health
// Style the "hit" and "miss" display
// Think on game theory about how easily the higher level person wins
// Remove tests on "attack" method in duel class since we removed that
