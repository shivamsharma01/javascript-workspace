class SuperHero {
  constructor(name, strength, speed, weapon, cape) {
    this._name = name;
    this._strength = strength;
    this._speed = speed;
    this._weapon = weapon;
    this._cape = cape;
  }

  powerUp() {
    this._strength += 5;
  }
  get name() {
    console.log('Getting name');
  }
  set name(newName) {
    console.log('Setting Name');
    this._name = newName;
  }
}

const hankDetails = ["Hank", 10, 5, "Fist", true];
let hero1 = new SuperHero(...hankDetails);

hero1.powerUp();
hero1._speed = 2;
console.log(hero1);
/* If this.name is present then set name(newName) is not allowed
  instead use this._name and set name(newName) {this._name = newName}
*/