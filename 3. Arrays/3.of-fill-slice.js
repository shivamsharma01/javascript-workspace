const arr1 = Array.of(7); // same as arr1 = [7];
console.log(arr1); // [7]

const arr2 = Array(7);
console.log(arr2); // [, , , , , , ,]

const arr3 = Array.of(7, "Hulk", [23, 12, 5], { sport: "baseball" });
console.log(arr3); // [ 7, 'Hulk', [ 23, 12, 5 ], { sport: 'baseball' } ]


const arr4 = [2, 4, 5, "a", 17, "r", 9, 9];


/* 
  fill mutates the array
  first argument is what to be filled with.
  second argument is the start index
  third argument is the stop index (exclusive)
*/
arr4.fill("b", 3, 4);
console.log(arr4); // [2, 4, 5, "b", 17, "r", 9, 9];

// if number is negative it starts from array.length +(-n) = length - n and stops at the end if stop index not given 
console.log(`arr4.fill("shivam", -5, 2);`);
arr4.fill("shivam", -5); // 8 + (-5) = 3 till the end of array
console.log(arr4); // [ 2, 4, 5, 'shivam', 'shivam', 'shivam', 'shivam', 'shivam']

arr4.fill("shivam", -5, 5); // 8 + (-5) = 3 till 5 (5 not included)
console.log(arr4); // [ 2, 4, 5, 'shivam', 'shivam', "r", 9, 9]
