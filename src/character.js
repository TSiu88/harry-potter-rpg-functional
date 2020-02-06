export class Character {
  constructor(name, house) {
    this.name = name;
    this.house = house;
    this.level = 1;
    this.health = 2;
    this.spells = ["miss", "hit"];
    this.personality = [this.assignPersonality()];
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
    if (this.level % 3 === 0){
      this.addPersonality();
    }
    this.resetHealth();
  }

  addPersonality(){
    let houseTraits = `${this.house}Traits`;
    if (this.personality.length < houseTraits.length){
      let trait = this.assignPersonality();
      if(!this.personality.includes(trait)){
        this.personality.push(trait);
      }
    }
  }

  castSpell(){
    let num = (Math.floor(Math.random() * this.spells.length));
    return this.spells[num];
  }

  takeDamage(hitAmount){
    this.health -= hitAmount;
  }

  resetHealth(){
    this.health = 2 * this.level;
  }

  getStrength(weaker) {
    let useLevel = this.level;
    if(weaker){
      useLevel++;
    }
    let num = Math.floor(Math.random() * useLevel) + 1;
    return num;
  }
}