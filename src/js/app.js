const characters = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    if ((name && type) === null || typeof (name && type) !== 'string' || (name.length <= 2 || name.length > 10) || !characters.includes(type)) throw new Error();
  }

  levelUp() {
    if (this.health >= 1) {
      this.level += 1;
      this.attack += (this.attack * 20) / 100;
      this.defence += (this.defence * 20) / 100;
      this.health = 100;
    } else {
      throw new Error();
    }
  }

  damage(points) {
    if (this.health >= 1) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error();
    }
  }
}

export class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
export class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
export class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
export class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
  }
}
export class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
  }
}
export class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
  }
}
