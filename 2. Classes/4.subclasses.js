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

class Human extends SuperHero {
  constructor(healthPoints, ...superHeroStuff) {
    super(...superHeroStuff);
    this._healthPoints = healthPoints;
  }
}

const billDetails = [20, "Bill", 10, 8, "Fast Feet", true];
const hero3 = new Human(...billDetails);
hero3.poop = "YUkk!!";
console.log(hero3);
console.log(Human.goodHero());