// also follow block scope as let.
/*
  const a; //Missing initializer in const declaration
*/

const a = [1, 2, 3, 4];

/* 
  after initialization cannot do 
  a = [1,2,3]
*/

//allowed 
a.push(5); //[1,2,3,4,5]
a.shift(); // [2,3,4,5]

// reference objects do not allow new reference but props / elements can be modified