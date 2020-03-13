/*
New DataType: Symbol 
  a something; indentifier; primitive

*/
console.log(String(`a`) === String(`a`)); // true
console.log(Number(2) === Number(2)); // true
console.log({} == {}); // false
console.log({} === {}); // false
console.log(undefined === undefined); // true
console.log(null === null); // true
console.log(Symbol() === Symbol()); // false

// why Symbols-> To avoid name collisions
const aSymbol = Symbol();

const CARCOLOR = Symbol();
const CARMAKE = Symbol();
const CARMODEL = Symbol();

class Car {
  constructor(color, make, model) {
    this[CARCOLOR] = color;
    this[CARMAKE] = make;
    this[CARMODEL] = model;
  }

  get color() {
    return this[CARCOLOR];
  }

  set color(color) {
    this[CARCOLOR] = color;
  }

}

let myCar = new Car(`Red`, `Chevy`, `Tohoe`);
myCar.color = 'Orange'; // calls the setter color() of myCar 
console.log(myCar.CARCOLOR); // doesnot work
console.log(myCar[CARCOLOR]); // this is a hack.. access to CARCOLOR CARMAKE and CARMODEL is not be provided outside
console.log(myCar);

/*
  Methods of symbol
*/

console.log(Symbol.for(`test`) === Symbol.for(`test`)); // returns true. it checks if symbol already created