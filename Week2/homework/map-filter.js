/*'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  console.log(numbers);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};  */

'use strict';

function doubleOddNumbers(numbers) {

  numbers = numbers.filter(num => num % 2 === 1).map(num => num * 2);

  console.log(numbers);

  return numbers;



const myNumbers = [1, 2, 3, 4];

console.log(doubleOddNumbers(myNumbers)); 
module.exports = {

  myNumbers,

  doubleOddNumbers,

};

//finished 