// 6 primitives in js
let str = 'Popeye';
let num = 3;
let bool = true;
let n = null;
let undef = undefined;
let s = Symbol(`mySymbol`);

// all primitives are stored by value
// we copy the value stored inside the variable

let obj = {
  name: 'popeye'
}

// values are not copied but reference stored
let cartoon = obj;
console.log(obj);
console.log(cartoon);
cartoon.girlfriend = `Olive Oil`;
console.log(obj); // didn't change obj but still obj has prop girlfriend
console.log(cartoon);
