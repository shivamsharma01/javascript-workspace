let myArray = [1, 2, 3, 4, 5];

//old way
myArray.map(function (x) {
  return x * 2;
});

//new way
myArray.map(x => x * 2);

// example 2
function timerFunctionArrow() {
  setInterval(() => {
    console.log(this)
  }, 1000);
};

// vs non arrow way

function timerFunctionold() {
  setInterval(function () {
    console.log(this)
  }, 1000);
}

// timerFunctionArrow(); // this points to window function
timerFunctionold(); // this points to setInterval function
