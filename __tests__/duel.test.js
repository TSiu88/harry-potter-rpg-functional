import { Duel } from "../src/duel";
import { Character } from "../src/character";

describe('Duel', () => {
  let duel;
  let character1;
  let character2;

  beforeEach(() => {
    character1 = new Character("Harry", "gryffindor");
    character2 = new Character("Malfoy", 'slytherin');
    duel = new Duel(character1 , character2);
  });

  test('should correctly create duel with two given characters', () => {
    expect(duel.characters).toEqual([character1, character2]);
    expect(duel.winner).toEqual(null);
    let possibleTurns = [0, 1];
    expect(possibleTurns).toContain(duel.turn);
  });

  test('should set duel winner property equal to current winner', () => {
    character2.health = 0;
    duel.checkForWinner(character1, character2);
    expect(duel.winner).toEqual(character1);
  });

  test('should reset duel winner property to null', () => {
    duel.winner = character1;
    duel.resetWinner();
    expect(duel.winner).toEqual(null);
  });

  test('should reset characters\' health and level up winner', () => {
    character1.health = 0;
    character2.health = 1;
    duel.winner = character2;
    duel.resetDuel();
    expect(character1.health).toEqual(2);
    expect(character2.health).toEqual(4);
    expect(character2.level).toEqual(2);
  });

  test('should correctly alternate turns', () => {
    let startTurn = duel.turn;
    let expectedTurn;
    if (startTurn === 0) {
      expectedTurn = 1;
    } else {
      expectedTurn = 0;
    }
    duel.switchTurn();
    expect(duel.turn).toEqual(expectedTurn);
  });

});