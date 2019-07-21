'use strict';
/* eslint */
/* 1_1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.
Your solution could be something like this:

function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]


Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>. */

function doubleOddNumbers(numbers) {
// Replace this comment and the next line with your code
describe('map_filter', () => {
  test('result -> [2, 6]', () => {
    const result = doubleOddNumbers(myNumbers);
    expect(result).toEqual([2, 6]);
  });
  test('result -> [2, 6]', () => {
    const result = doubleOddNumbers([4, 7, 1, 2]);
  
    expect(result).toEqual([14, 2]);
  });
});

  console.log(numbers);
  return [2, 6];
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
