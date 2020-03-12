const arr = ['This', 'is', 'an', 'awesome', 'course'];
const elem = arr.find((elm, i) => {
  return elm.length > 5 ? true : false;
  // return true or false
  // returns the first element that returns true else undefined
});

// find the index of the first matching elm
const index = arr.findIndex((elm, i) => {
  return elm.length > 5 ? true : false;
  // return true or false
  // returns the first element that returns true else undefined
});

console.log(`${elem} - ${index}`);