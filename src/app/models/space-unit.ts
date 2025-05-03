export interface IUnit {
    health: number;
    maxHealth: number;
    damage: number;
    move(): string;
    attack(): number;
    repair(amount: number): void;
    takeDamage(damage: number): void;
    specialAbility(): string;
  }
  
  export abstract class SpaceUnit implements IUnit {
    health: number;
    maxHealth: number;
    damage: number;
  
    constructor(health: number, damage: number) {
      this.health = health;
      this.maxHealth = health;
      this.damage = damage;
    }
  
    takeDamage(damage: number): void {
      this.health = Math.max(0, this.health - damage);
    }
  
    repair(amount: number): void {
      this.health = Math.min(this.maxHealth, this.health + amount);
    }
  
    abstract move(): string;
    abstract attack(): number;
    abstract specialAbility(): string;
  }
  
  export class Spacecraft extends SpaceUnit {
    constructor() {
      super(100, 20);
    }
  
    move(): string {
      return 'Spacecraft warps to new coordinates';
    }
  
    attack(): number {
      return this.damage;
    }
  
    specialAbility(): string {
      return 'Spacecraft activates cloaking device';
    }
  }
  
  export class Station extends SpaceUnit {
    constructor() {
      super(200, 10);
    }
  
    move(): string {
      return 'Station adjusts orbit';
    }
  
    attack(): number {
      return this.damage;
    }
  
    specialAbility(): string {
      return 'Station deploys defense satellites';
    }
  }
  
  export class Robot extends SpaceUnit {
    constructor() {
      super(50, 15);
    }
  
    move(): string {
      return 'Robot navigates terrain';
    }
  
    attack(): number {
      return this.damage;
    }
  
    specialAbility(): string {
      return 'Robot deploys repair drones';
    }
  }