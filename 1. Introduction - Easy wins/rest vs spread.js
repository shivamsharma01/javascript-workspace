//Rest - i dont know how many vars you are sending, so i will put whatever is remaining in an array.
function getRemaining(a, ...arr) {
  console.log(arr); //2,3,4
}

getRemaining(1, 2, 3, 4);
function sumRest(...numList) {
  return numList.reduce((total, num) => {
    return total + num;
  }, 0);
}

const total = sumRest(1, 2, 3, 4, 5);
console.log(total);

// Spread
function sumSpread(x, y) {
  return x + y;
}

const numbers = [1, 2, 3, 4, 5];
const uglyWay = sumSpread(numbers[0], numbers[1]);
const oldWay = sumSpread.apply(null, numbers);
const spreadWay = sumSpread(...numbers);
console.log(uglyWay);
console.log(oldWay);
console.log(spreadWay);

//example 2
function aReducer(state, action) {
  let newState = { ...state }; // oldway: Object.assign({}, state);
  newState.newProp = action.payload;
  return newState;
}

state = {
  a: 1, b: 2, c: 3
}

action = {
  type: 'done',
  payload: 30
}

aReducer(state, action);


//example 3
function Ball(radius, x, y) {
  this.r = radius;
  this.x = x;
  this.y = y;
}

let ballArgs = [50, 100, 200];

//old way = let ball = new Ball(ballArgs[0],ballArgs[1], ballArgs[2]);
// let ball = Ball.apply(new Ball(), ballArgs); // will work if Ball method return 'this'
let ballSpreadWay = new Ball(...ballArgs);
console.log(ballSpreadWay);

// example 4
let myArray = [1, 2, 3]
myArray = [0, ...myArray, 4];
console.log(myArray);

