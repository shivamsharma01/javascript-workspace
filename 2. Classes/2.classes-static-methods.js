class SuperHero {
  constructor(name, strength, speed, weapon, cape) {
    this._name = name;
    this._strength = strength;
    this._speed = speed;
    this._weapon = weapon;
    this._cape = cape;
    /*
    this._goodHero = true;  
    if every student has the same property it is better it is assigned to the class instead of the objects 
    because then each object will have to be assigned this same property which will consume more memory.
    */
  }

  static goodHero() {
    return true;
  }
  powerUp() {
    this._strength += 5;
  }
  get name() {
    console.log('Getting name');
    return this._name;
  }
  set name(newName) {
    console.log('Setting Name');
    this._name = newName;
  }
}

const hankDetails = ["Hank", 10, 5, "Fist", true];
const philDetails = ["Phil", 15, 1, "Gun", false];
let hero1 = new SuperHero(...hankDetails);
let hero2 = new SuperHero(...philDetails);

hero1.powerUp();
hero1.speed = 2;
console.log(hero1);
console.log(hero2);
console.log(SuperHero.goodHero()); // cannot write hero1.getHero() as getHero is static

