const name = "Rob";
const hello = "Hello, " + name;
console.log(hello);

let selectQuery = "select * from users where name = " + name;
console.log(selectQuery); // not accepted in sql: select * from users where name = Rob

selectQuery = 'select * from users where name = "' + name + '"';
console.log(selectQuery); // accepted in sql: select * from users where name = "Rob"

//template literals
selectQuery = `select * from users where name = "${name}"`;
console.log(selectQuery);

//easy multiline statements instead of \n 
const string = `It is a rainy day
and I am loving it.`;

console.log(string);

const html = `
  <div class="container">
    ${name}
  </div>
`
console.log(html);

const expression = `43 * 1902 = ${43 * 1902}`;
console.log(expression);

const isMember = false;

const aTernary = `Your price is ${isMember ? "$2.00" : "$4.00"}`;
console.log(aTernary);