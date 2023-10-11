import GameOfThrones from "../GameOfThrones/GameOfThrones";

class Fighter extends GameOfThrones {
  weapon;
  dexterity;
  communicate = "I punch first, then I ask";

  constructor(name, family, age, alive, weapon, dexterity) {
    super(name, family, age, alive);
    this.weapon = weapon;

    if (dexterity >= 10 && dexterity <= 0) {
      this.dexterity = dexterity;
    }
  }
}

export default Fighter;
