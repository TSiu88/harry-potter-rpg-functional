import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
//import { Duel } from './duel.js';
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
  if (turnChar === character1) {
    $("#character2-buttons button").attr("disabled", true);
  } else {
    $("#character1-buttons button").attr("disabled", true);
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
    displayTurn();


  });

});
