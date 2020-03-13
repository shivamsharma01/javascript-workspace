// can only hold objects
// primary gain of using weakset is garbage collection
let weakSet = new WeakSet();

/*
  Has 3 methods
  add()
  delete()
  has()
*/

// weakSet.add('Anna'); not allowed only objects
const obj = { name: 'Anna' };
weakSet.add(obj);
const arr = [{ name: 'Jim' }, { name: 'Tim' }];
weakSet.add(arr); // add array as an element and not the elements inside the array individually

console.log(weakSet); // prints: WeakSet { <items unknown> }
console.log(weakSet.has({ name: 'Anna' })); // returns false as not the same reference
console.log(weakSet.has(arr)); // returns true

