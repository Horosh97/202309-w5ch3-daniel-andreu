import GameOfThrones from "../GameOfThrones/GameOfThrones";

class Squire extends GameOfThrones {
  servedCharacter;
  toadyLvl;
  communicate = "I'm a loser'";

  constructor(name, family, age, alive, servedCharacter, toadyLvl) {
    super(name, family, age, alive);

    if (toadyLvl >= 10 && toadyLvl <= 0) {
      this.toadyLvl = toadyLvl;
    }

    if (servedCharacter instanceof Fighter) {
      this.servedCharacter = servedCharacter;
    }
  }
}

export default Squire;
