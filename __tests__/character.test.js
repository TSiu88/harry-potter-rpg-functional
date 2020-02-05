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
    expect(character.health).toEqual(3);
    expect(character.spells).toEqual(["miss", "hit"]);
  });

  test('should correcly assign one personality trait based on house', () => {
    let gryffindorTraits = ["brave", "determined", "stubborn", "self-righteous", "daring", "arrogant", "chivalrous"];
    expect(gryffindorTraits).toContain(character.personality);
  });
});