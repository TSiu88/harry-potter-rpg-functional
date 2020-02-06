import { Character } from "../src/character";

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character("Harry", "gryffindor");
  });

  test('should correctly create a character object', () => {
    expect(character.name).toEqual("Harry");
    expect(character.house).toEqual("gryffindor");
    expect(character.level).toEqual(1);
    expect(character.health).toEqual(2);
    expect(character.spells).toEqual(["miss", "hit"]);
  });

  test('should correcly assign one personality trait based on house', () => {
    let gryffindorTraits = ["brave", "determined", "stubborn", "self-righteous", "daring", "arrogant", "chivalrous"];
    expect(gryffindorTraits).toContain(character.personality);
  });

  test('should correctly decrease character\'s health by inputted damage amount', () => {
    character.takeDamage(1);
    expect(character.health).toEqual(1);
  });

  test('should reset health correctly to max health amount', () => {
    character.takeDamage(1);
    character.resetHealth();
    expect(character.health).toEqual(2);
  });

  test('should increase level and health correctly when character levels up', () => {
    character.levelUp();
    expect(character.level).toEqual(2);
    expect(character.health).toEqual(4);
  });

  test('should correctly select random spell from character\'s spell list', () => {
    let spell = character.castSpell();
    expect(character.spells).toContain(spell);
  });

  test('should return random strength value from 1 to current level', () => {
    character.level = 3;
    let expectedStrength = [1, 2, 3];
    let strength = character.getStrength();
    expect(expectedStrength).toContain(strength);
  });

});