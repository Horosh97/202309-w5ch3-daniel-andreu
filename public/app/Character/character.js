class Character {
  name;
  family;
  age;
  alive;

  die() {
    this.alive = false;
  }

  comunicate(communique) {
    return `Hi, ${communique}`;
  }
}

export default Character;
