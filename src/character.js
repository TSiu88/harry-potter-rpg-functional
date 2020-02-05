export class Character {
  constructor(name, house) {
    this.name = name;
    this.house = house;
    this.level = 1;
    this.health = 3;
    this.spells = ["miss", "hit"];
    this.personality = this.assignPersonality();
  }

  assignPersonality() {
    let gryffindorTraits = ["brave", "determined", "stubborn", "self-righteous", "daring", "arrogant", "chivalrous"];
    let hufflepuffTraits = ["loyal", "fair", "kind", "modest", "dedicated", "boring", "meek"];
    let ravenclawTraits = ["intelligent", "wise", "creative", "quirky", "eccentric", "snobby", "independent"];
    let slytherinTraits = ["cunning", "ambitious", "resourceful", "elitist", "ruthless", "exclusive", "respected"];

    let num = (Math.round(Math.random() * 7));

    if (this.house === "gryffindor") {
      return gryffindorTraits[num -1];
    } else if (this.house === "hufflepuff") {
      return hufflepuffTraits[num -1];
    } else if (this.house === "ravenclaw") {
      return ravenclawTraits[num -1];
    } else if (this.house === "slytherin") {
      return slytherinTraits[num -1];
    }
  }
  
}