'use strict';

const myNumbers = [1, 2, 3, 4];

const doubleOddNumbers = numbers => {
  const odds = numbers.filter(function(number) {
    return number % 2 !== 0;
  });
  const doubles = odds.map(function(number) {
    return number * 2;
  });
  return doubles;
};

console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
