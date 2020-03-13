const myContacts = {
  "Rob": "555-1234",
  "Jim": "555-2345"
};

let keyFunc = () => {
  console.log("Hello World");
};
let contacts = new Map();
contacts.set("Rob", "555-1234");
const rob = contacts.get("Rob");
console.log(rob);
// can even pass a function : keyFunc returns [Function: keyFunc]
contacts.set(keyFunc, "Haha, I just used a function as a key");
const huh = contacts.get(keyFunc);
console.log(huh);


/* Map Methods */
// size property
console.log(contacts.size);


// not possible with myContacts above
for (value of contacts) {
  console.log(value);
}

// get all the entries
console.log(contacts.entries());


// forEach returns only the values in the callback provided
contacts.forEach(elem => console.log(elem));

// keys() returns only the keys
console.log(contacts.keys());

// keys() returns only the values
console.log(contacts.values());

// clear method
contacts.clear();
console.log(contacts.size); // prints 0

