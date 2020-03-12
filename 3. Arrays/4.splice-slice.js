
/*
  slice is immutable: returns a copy of elements from mentioned start index till end index (not included) 
*/
console.log(arr4.slice(1, 3)); // returns from index 1 to index 3 (excluded) output = [4, 5]


/*
  splice is mutator
  1. where to start
  2. how many to delete
  3. what to insert
*/
let discountMonths = ['Jan', 'Feb', 'April', 'Nov'];
discountMonths.splice(3, 0, 'August'); // start at index 3, 0: do not delete, insert august at 3
console.log(discountMonths); // [ 'Jan', 'Feb', 'April', 'August', 'Nov' ]