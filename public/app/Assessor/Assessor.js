import GameOfThrones from "../GameOfThrones/GameOfThrones";

class Assessor extends GameOfThrones {
  advisedCharacter;
  communicate = "Don't know why, but I think I'm gonna die soon";

  constructor(name, family, age, alive, advisedCharacter) {
    super(name, family, age, alive);
    this.advisedCharacter = advisedCharacter;
  }
}

export default Assessor;
