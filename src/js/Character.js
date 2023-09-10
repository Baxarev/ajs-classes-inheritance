class Character {
  constructor() {
    this.lvl = 1;
    this._powerMode = false;
    this._powerModeUsed = true;
    this._startAttackCount = 0;
    this._startAttackAddBonus = false;
    this._attack = null;
    this._defence = null;
    this._health = 100;
  }

  get attack() {
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get defence() {
    return this._defence;
  }

  set defence(value) {
    this._defence = value;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(value) {
    if (value === true && this._powerModeUsed) {
      this._powerMode = true;
      this._powerModeUsed = false;
    } else {
      console.error("вы уже использовали powermode");
    }
  }

  startAttack() {
    if (this.powerMode) {
      this._startAttackCount++;
      if (!this._startAttackAddBonus) {
        this.attack *= 2;
        this.defence *= 2;
        this.health *= 2;
        this._startAttackAddBonus = true;
      }
      if (this._startAttackCount > 3) {
        this._powerMode = false;
        this.attack /= 2;
        this.defence /= 2;
        this.health /= 2;
      }
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.lvl++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      console.error("нельзя повысить level умершего");
    }
  }
}

class Bowerman extends Character {
  constructor() {
    super();
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor() {
    super();
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor() {
    super();
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor() {
    super();
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor() {
    super();
    this.attack = 40;
    this.defence = 10;
  }
}

class Daemon extends Character {
  constructor() {
    super();
    this.attack = 10;
    this.defence = 40;
  }
}

export { Character, Bowerman, Swordsman, Magician, Undead, Zombie, Daemon };
