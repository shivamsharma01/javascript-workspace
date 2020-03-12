//ways to create
//1
let obj = new Object();
//2
obj = Object.create(null);
//3
obj = {};

const stuffFromElseWhere = {
  name: "Bob",
  career: "Teacher",
  language: "JS",
  aMethod: function () {
    console.log("I Teach");
  }
};

const name = stuffFromElseWhere.name;
const aMethod = stuffFromElseWhere.aMethod();

let newObj = {
  name: name,
  aMethod: aMethod
}

// new Way
newObj = {
  name,
  aMethod() {
    console.log('I Teach');
  }
}

// example 2 - initialize many variables in a single line. Pass only the required fields

let movieObject = {
  title: 'Fast & Furious',
  genre: 'Action',
  release_date: 2003,
  overview: 'Fast and the Furious is famous worldwide.'
};

const { title, genre } = movieObject;
console.log(`${title} - ${genre}`);

// observe the argument. it is an object.
function objPrinter({ title, genre, release_date }) {
  console.log(`${genre} film: ${title} was released on ${release_date}.`);
}
objPrinter({ ...movieObject });

const complexObject = {
  arr: [
    1, 2, 3, 4
  ]
}

const { arr: { [0]: first, [3]: forth } } = complexObject;

console.log(`${first} - ${forth}`);

// example - using comma to get through to a specific value

let [, , specific, ,] = complexObject.arr; // specific takes the third value because 2 commas before it takes first 2 elements/
console.log(specific); // 3

[, , ...specific] = complexObject.arr; // specific takes everything after first 2 elements (because 2 commas).
console.log(specific); // [3, 4]