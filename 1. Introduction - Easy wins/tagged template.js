// tagged template

let names = 'Mr. and Mrs. dursley';
let location = 'Delhi & Mumbai';
let arr = [
  "one",
  "two"
]
function buildHTML(strings, expr1, expr2) {
  console.log(strings);
  console.log(expr1);
  console.log(expr2);
}

// everything which is not a expression is passed inside an array 'strings' variable above
// expressions are passed 1 by 1.. i.e., expr1 will hold value of ${name} expr2 will hold value of ${expr2}
let result;
result = buildHTML`<p>${names}-locationin-${location}</p>`;

result = buildHTML`<p>${arr}</p>`;

//meaningful example

function buildHTMLContent(tags, lines) {
  return function (element) {
    const newHTML = lines.map(line => {
      return `${tags[0]}${line}${tags[1]}`;
    })
    const finalHTML = newHTML.join('');
    document.querySelector(element).innerHTML += finalHTML;
  }
}
const placeHTML = buildHTMLContent`<li>${lines}</li>`;
placeHTML('#container');
