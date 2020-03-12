var i = 1;
function child() {
  console.log(i);
  var i = 5;
  console.log(i);
}
console.log(i); // 1
child();
console.log(i); // still 1

/*
  outer var i is outside of the function child therefore it is not available
  inner var i is hoisted up inside the child function without the initialization

  function child() {
    var i;
    console.log(i); // undefined
    i = 5;
    console.log(i); // 5
  }

*/

// not allowed with let

function letChild() {
  console.log(i); // ReferenceError: Cannot access 'i' before initialization
  let i = 5;
  console.log(i); // 5
}
letChild();