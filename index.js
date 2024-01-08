class heroAdventure {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  attack() {
    let attackHero = "";
    switch (this.type) {
      case "mago":
        attackHero = "magia";
        break;
      case "guerreiro":
        attackHero = "espada";
        break;
      case "monge":
        attackHero = "artes marciais";
        break;
      case "ninja":
        attackHero = "shuriken";
        break;
      default:
        attackHero = "undefined";
    }
    console.log(`o ${this.type} atacou usando ${attackHero}`);
  }
}

let myHero = new heroAdventure("Bianca", "23", "mago");
myHero.attack();
