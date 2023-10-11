class Character {
  name;
  family;
  age;
  alive;

  constructor(name, family, age, alive) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.alive = alive;
  }

  die() {
    this.alive = false;
  }

  comunicate(communique) {
    return `Hi, ${communique}`;
  }
}

export default Character;
