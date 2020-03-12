/*
==================================(var)============================================
*/

function vari() {
  var i = 1; // same as i = 1;
  console.log(i);

  for (var i = 0; i < 10; i++) {
    console.log("i in the loop is ", i);
  }

  /*
  var has function scope and not block scope therefore there is only a single var i
  i.e., outer i and forloop i both are the same.
  therefore forloop has changed the outer var i
  */
  console.log("i after the loop is ", i);

}
vari();
/*
================================(let)==============================================
*/
function leti() {
  let i = 1;
  console.log(i);

  for (let i = 0; i < 10; i++) {
    console.log("i in the loop is ", i);
  }

  /*
  let has block scope therefore there are 2 instances of i
  i.e., outer i and forloop i both are separate variables.
  therefore forloop has changed only the inner let i.
  */
  console.log("i after the loop is ", i);
}
leti();

/*
==============================================================================
*/



/*
==============================================================================
*/



/*
==============================================================================
*/



/*
==============================================================================
*/



/*
==============================================================================
*/