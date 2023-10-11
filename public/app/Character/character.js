class Character {
  name;
  family;
  age;
  alive;

  die() {
    this.alive = false;
  }
}

export default Character;
