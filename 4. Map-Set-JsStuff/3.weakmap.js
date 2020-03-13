// weapMap will allow garbage collection, if the key has no reference
// it's not an iterable, and only has get, set , has, delete


let aStrongMap = new Map();
let friend = { name: 'Jim' };
aStrongMap.set(friend, 'Best Friend');
console.log(aStrongMap.get(friend));

friend = null;
// although no reference but entry still exists (memory leak)
console.log(aStrongMap.entries());

console.log('********************Weak Map*******************');
let aWeakMap = new WeakMap();
friend = { name: 'Bill' };
aWeakMap.set(friend, 'Best Friend');
console.log(aWeakMap.get(friend));

friend = null;
// although no reference but entry still exists (memory leak)
console.log(aWeakMap.get(friend));
