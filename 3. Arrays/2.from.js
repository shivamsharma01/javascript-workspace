const x = Array.from('shivam');
const y = Array.from('12345');
const j = Array.from(y, (val) => val * 10);

console.log(x); // ['s', 'h', 'i', 'v', 'a', 'm']
console.log(y); // ['1', '2', '3', '4', '5']  
console.log(j); // [ 10, 20, 30, 40, 50 ]