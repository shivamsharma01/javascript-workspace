const arr = [1, 2, 3, 4, 5];
const obj = {
  name: 'shivam',
  age: 28,
  profession: 'Software Engineer'
};
/* 
  (for in) vs (for of)
      for in works on keys
      for of works on the values
*/

// arr iteration methods

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// in
for (let key in arr) {
  console.log(arr[key]);
}

// of
for (let value of arr) {
  console.log(value);
}

// works only for arrays
arr.forEach((val, i) => console.log(`${val} - ${i}`));


// strings
const str = 'shivam';

for (let letter in str) {
  console.log(str[letter]);
}

for (let letter of str) {
  console.log(letter);
}


// Objects
for (let key in obj) {
  console.log(obj[key]);
}

/*
for (let value of obj) {
  console.log(value);
}
*/