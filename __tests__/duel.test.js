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
  });

  test('should set duel winner property equal to current winner', () => {
    character2.health = 0;
    duel.checkForWinner(character2, character1);
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
    duel.endDuel();
    expect(character1.health).toEqual(2);
    expect(character2.health).toEqual(4);
    expect(character2.level).toEqual(2);
  });

  test('should decrease health of defending character when attack hits', () => {
    duel.attack(character1.name);
    let possibleRemainingHealth = [1, 2];
    expect(possibleRemainingHealth).toContain(character2.health);
  });

  test('should level up winning character when attack kills opposition', () => {
    duel.attack(character1.name);
    duel.attack(character1.name);
    let possibleCharacter1Levels = [1, 2];
    expect(possibleCharacter1Levels).toContain(character1.level);
  });

});