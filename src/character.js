export class Character {
  constructor(name, house) {
    this.name = name;
    this.house = house;
    this.level = 1;
    this.health = 2;
    this.spells = ["miss", "hit"];
    this.personality = this.assignPersonality();
  }

  assignPersonality() {
    let gryffindorTraits = ["brave", "determined", "stubborn", "self-righteous", "daring", "arrogant", "chivalrous"];
    let hufflepuffTraits = ["loyal", "fair", "kind", "modest", "dedicated", "boring", "meek"];
    let ravenclawTraits = ["intelligent", "wise", "creative", "quirky", "eccentric", "snobby", "independent"];
    let slytherinTraits = ["cunning", "ambitious", "resourceful", "elitist", "ruthless", "exclusive", "respected"];

    let num = (Math.floor(Math.random() * gryffindorTraits.length));

    if (this.house === "gryffindor") {
      return gryffindorTraits[num];
    } else if (this.house === "hufflepuff") {
      return hufflepuffTraits[num];
    } else if (this.house === "ravenclaw") {
      return ravenclawTraits[num];
    } else if (this.house === "slytherin") {
      return slytherinTraits[num];
    }
  }
  
  levelUp(){
    this.level++;
    this.health = 2 * this.level;
  }

  castSpell(){
    let num = (Math.floor(Math.random() * this.spells.length));
    console.log(num);
    return this.spells[num];
  }

  takesDamage(hitAmount){
    this.health -= hitAmount;
  }

}