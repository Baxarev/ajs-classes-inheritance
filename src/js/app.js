// TODO: write code here
import * as Characters from "./Character";

const mage = new Characters.Daemon();

console.log(mage);

mage.powerMode = true;
console.log(mage.health);
console.log(mage.attack);
console.log(mage.defence);
console.log(mage.powerMode);

mage.startAttack();
console.log(mage.health);
console.log(mage.attack);
console.log(mage.defence);
console.log(mage.powerMode);

mage.startAttack();
console.log(mage.health);
console.log(mage.attack);
console.log(mage.defence);
console.log(mage.powerMode);

mage.startAttack();
console.log(mage.health);
console.log(mage.attack);
console.log(mage.defence);
console.log(mage.powerMode);

mage.powerMode = true;
mage.startAttack();
console.log(mage.health);
console.log(mage.attack);
console.log(mage.defence);
console.log(mage.powerMode);
