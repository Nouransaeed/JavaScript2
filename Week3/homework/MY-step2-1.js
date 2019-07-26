'use strict';
/*sample*/
// function doIt() {
//   console.log('I am done');
// }
// setTimeout(doIt, 5000);

//Test by copy-pasting this function to the browser console
function foo(func) {
  // What to do here?
  // Replace this comment and the next line with your code
  return ('Hi, I am AaaaT, who are you?');
  console.log(func);
}

function bar() {
  console.log('Hello, I am bar!');
}
setTimeout(bar, 3000);
foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
