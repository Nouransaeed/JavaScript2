'use strict';

{
  function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

  const numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {

      numbers.push(i);

      //A callback to call if the number is divisible by 3

      if (i % 3 === 0) {

        threeCallback(i);

      }

      //A callback by 5 

      if (i % 5 === 0) {

        fiveCallback(i);

      }}}


threeFive()

function sayThree(number) {
   console.log(number, 'value is divisible by 3');
}



function sayFive(number) {
  console.log(number, 'value is divisible by 5');
}
threeFive(10, 15, sayThree, sayFive);
module.exports = threeFive;

} 
//finished 