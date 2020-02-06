export class Duel {
  constructor(character1, character2){
    this.characters = [character1, character2];
    this.winner = null;
    this.turn = (Math.floor(Math.random() * this.characters.length));
  }

  checkForWinner(attacker, defender){
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

  resetDuel(){
    this.characters[0].resetHealth();
    this.characters[1].resetHealth();
    if (this.winner){
      this.winner.levelUp();
      this.resetWinner();
    }
  }

  switchTurn() {
    if (this.turn === 0) {
      this.turn = 1;
    } else {
      this.turn = 0;
    }
  }
}