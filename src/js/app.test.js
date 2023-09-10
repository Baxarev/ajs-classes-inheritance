import * as Characters from "./Character";

describe("Character test", () => {
  let test;
  beforeEach(() => {
    test = new Characters.Daemon();
  });

  it("lvlup test if health > 0", () => {
    test.levelUp();
    expect(test.lvl).toBe(2);
    expect(test.health).toBe(100);
    expect(test.attack).toBe(12);
    expect(test.defence).toBe(48);
  });

  it("lvlup test if health <= 0", () => {
    test.health = 0;
    test.levelUp();
    expect(test.lvl).toBe(1);
    expect(test.health).toBe(0);
    expect(test.attack).toBe(10);
    expect(test.defence).toBe(40);
  });

  it("default properties test", () => {
    expect(test.lvl).toBe(1);
    expect(test.powerMode).toBe(false);
    expect(test.attack).toBe(10);
    expect(test.defence).toBe(40);
    expect(test.health).toBe(100);
  });

  it("powermod value true and use startAttack test", () => {
    test.powerMode = true;
    test.startAttack();
    expect(test.powerMode).toBe(true);
    expect(test._powerModeUsed).toBe(false);
    expect(test.attack).toBe(20);
    expect(test.defence).toBe(80);
    expect(test.health).toBe(200);
  });

  it("cant use powermode again after 3 attacks", () => {
    test.powerMode = true;
    expect(test.powerMode).toBe(true);
    test.startAttack();
    test.startAttack();
    test.startAttack();
    test.startAttack();
    test.powerMode = true;
    expect(test.powerMode).toBe(false);
  });
});
