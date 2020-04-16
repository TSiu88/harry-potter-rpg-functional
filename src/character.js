export class Character {
  constructor(name, house) {
    this.name = name;
    this.house = house;
    this.level = 1;
    this.health = 2;
    this.spells = ["miss", "hit"];
    const newChar = assignPersonality(house);
    this.personality = [eval(`newChar.${house}()`)];
    this.inventory = [];
  }

  // assignPersonality() {
  //   let gryffindorTraits = ["brave", "determined", "stubborn", "self-righteous", "daring", "arrogant", "chivalrous"];
  //   let hufflepuffTraits = ["loyal", "fair", "kind", "modest", "dedicated", "boring", "meek"];
  //   let ravenclawTraits = ["intelligent", "wise", "creative", "quirky", "eccentric", "snobby", "independent"];
  //   let slytherinTraits = ["cunning", "ambitious", "resourceful", "elitist", "ruthless", "exclusive", "respected"];

  //   let num = (Math.floor(Math.random() * gryffindorTraits.length));

  //   if (this.house === "gryffindor") {
  //     return gryffindorTraits[num];
  //   } else if (this.house === "hufflepuff") {
  //     return hufflepuffTraits[num];
  //   } else if (this.house === "ravenclaw") {
  //     return ravenclawTraits[num];
  //   } else if (this.house === "slytherin") {
  //     return slytherinTraits[num];
  //   }
  // }
  
  levelUp(){
    this.level++;
    if (this.level % 3 === 0){
      this.addPersonality();
    }
    if (this.level % 1 === 0){
      this.addToInventory();
    }
    this.resetHealth();
  }

  addPersonality(){
    let houseTraits = eval(`${this.house}Traits`);
    if (this.personality.length < houseTraits.length){
      let traitObject = assignPersonality(this.house);
      let trait = eval(`traitObject.${this.house}()`);
      if(!this.personality.includes(trait)){
        this.personality.push(trait);
      }
    }
  }

  addToInventory(){
    if (this.inventory.length < items.length){
      let newItem = getItem();
      if(!this.inventory.includes(newItem)){
        this.inventory.push(newItem);
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

  // Gives weaker character slight boost in attacking
  calculateDamage(isWeaker) {
    let useLevel = this.level;
    if(isWeaker){
      useLevel++;
    }
    let num = Math.floor(Math.random() * useLevel) + 1;
    return num;
  }
}

const gryffindorTraits = ["brave", "determined", "stubborn", "self-righteous", "daring", "arrogant", "chivalrous"];
const hufflepuffTraits = ["loyal", "fair", "kind", "modest", "dedicated", "boring", "meek"];
const ravenclawTraits = ["intelligent", "wise", "creative", "quirky", "eccentric", "snobby", "independent"];
const slytherinTraits = ["cunning", "ambitious", "resourceful", "elitist", "ruthless", "exclusive", "respected"];

const assignPersonality = function(house) {
  let traitsArray = eval(`${house}Traits`);
  let num = (Math.floor(Math.random() * traitsArray.length));
  const obj = {
      [house]: function(){
      return traitsArray[num];
    }
  }
  return obj;
}

const items = ["feather", "pepperup potion", "spellbook1", "spellbook2", "chocolate", "butterbeer"];

const getItem = function() {
  let num = (Math.floor(Math.random() * items.length));
  return items[num];
}