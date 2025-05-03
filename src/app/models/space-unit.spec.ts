import { Spacecraft, Station, Robot } from "./space-unit";


describe('SpaceUnit Hierarchy', () => {
  let spacecraft: Spacecraft;
  let station: Station;
  let robot: Robot;

  beforeEach(() => {
    spacecraft = new Spacecraft();
    station = new Station();
    robot = new Robot();
  });

  // Test creation and initialization
  it('should create a Spacecraft with correct initial values', () => {
    expect(spacecraft.health).toBe(100);
    expect(spacecraft.maxHealth).toBe(100);
    expect(spacecraft.damage).toBe(20);
  });

  it('should create a Station with correct initial values', () => {
    expect(station.health).toBe(200);
    expect(station.maxHealth).toBe(200);
    expect(station.damage).toBe(10);
  });

  it('should create a Robot with correct initial values', () => {
    expect(robot.health).toBe(50);
    expect(robot.maxHealth).toBe(50);
    expect(robot.damage).toBe(15);
  });

  // Test takeDamage
  it('should reduce health when Spacecraft takes damage', () => {
    spacecraft.takeDamage(30);
    expect(spacecraft.health).toBe(70);
  });

  it('should not allow health to go below 0 when taking damage', () => {
    spacecraft.takeDamage(150);
    expect(spacecraft.health).toBe(0);
  });

  // Test repair
  it('should increase health when Robot is repaired', () => {
    robot.takeDamage(20);
    robot.repair(10);
    expect(robot.health).toBe(40);
  });

  it('should not allow health to exceed maxHealth when repairing', () => {
    spacecraft.repair(50);
    expect(spacecraft.health).toBe(100);
  });

  // Test move
  it('should return correct move message for Station', () => {
    expect(station.move()).toBe('Station adjusts orbit');
  });

  // Test attack
  it('should return correct attack damage for Spacecraft', () => {
    expect(spacecraft.attack()).toBe(20);
  });

  // Test specialAbility
  it('should return correct special ability for Robot', () => {
    expect(robot.specialAbility()).toBe('Robot deploys repair drones');
  });
});