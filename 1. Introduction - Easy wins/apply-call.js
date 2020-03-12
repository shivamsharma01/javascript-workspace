/* 
  Only difference b/w call and apply is that call takes comma separated arguments while apply takes an array
  both are called on a function and gives the context of the passed object
*/

//NOTE:  helperfunction does have name properties. 
function helperFunction(location, age) {
  console.log(`${this.name} is ${age} years old and is from ${location}.`);
}

const obj = {
  name: 'shivam'
};

// call
helperFunction.call(obj, 'delhi', 28);

// apply
helperFunction.apply(obj, ['delhi', 28]);
