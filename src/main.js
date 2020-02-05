import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
//import { Duel } from './duel.js';
//import { Character } from './character.js';

$(document).ready(function(){
  $("#stats-display").hide();
  $("#create-btn").click(function(event){
    event.preventDefault();

    // let char1Name = $("#character1-name").val();
    // let char2Name = $("#character2-name").val();
    // let char1House = $("#character1-house").val();
    // let char2House = $("#character2-house").val();
    // // let char1Gender = $("input:radio[name=gender1]:checked").val();
    // // let char2Gender = $("input:radio[name=gender2]:checked").val();

    // // let character1 = new Character(char1Name, char1House);
    // // let character2 = new Character(char2Name, char2House);

    $("form").hide();
    $("#stats-display").show();
  });

});
