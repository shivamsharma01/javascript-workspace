/*
  A set is very similar to an array.. except it is not an array (no push, no pop etc)
  It can hold any data type
  All elements are unique
  It is iterable (Insertion order).
*/

let employeeId = new Set([`a12`, `e7`, `c2`, `a12`]);
console.log(employeeId); // a12 not repeated

// forEach is available
employeeId.forEach(emp => console.log(emp));

// size property
console.log(employeeId.size);

// duplicate elements
let employeeSet = new Set();
employeeSet.add({
  name: 'jane',
  position: 'CTO'
});
employeeSet.add({
  name: 'jane',
  position: 'CTO'
});
// duplicate is present because javascript only checks reference for objects
console.log(employeeSet);


employeeSet = new Set();
employeeSet.add('Anna');
employeeSet.add('Jim');
employeeSet.add('Tim');
// delete a particular element
employeeSet.delete('Anna');
console.log(employeeSet);

// 
console.log(employeeSet.entries());

// entries(), keys(), values()

console.log(employeeSet.keys());
console.log(employeeSet.values());
// clear: delete all the elements
employeeSet.clear();
