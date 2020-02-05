export class Duel {
  constructor(character1, character2){
    this.characters = [character1, character2];
    this.winner = null;
  }

  attack(attackerName){
    let attacker;
    let defender;
    if (this.characters[0].name == attackerName){
      attacker = this.characters[0];
      defender = this.characters[1];
    } else{
      attacker = this.characters[1];
      defender = this.characters[0];
    }
    let spell = attacker.castSpell();
    if (spell === "hit"){
      defender.takeDamage(attacker.level);
      if (this.checkForWinner(defender, attacker)){
        this.endDuel();
      }
    }
  }

  checkForWinner(defender, attacker){
    if (defender.health <= 0){
      this.winner = attacker;
      return true;
    } else{
      return false;
    }
  }

  resetWinner() {
    this.winner = null;
  }

  endDuel(){
    this.characters[0].resetHealth();
    this.characters[1].resetHealth();
    if (this.winner){
      this.winner.levelUp();
      this.resetWinner();
    }
  }
}