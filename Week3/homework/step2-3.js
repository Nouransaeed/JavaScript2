'use strict';

function repeatStringNumTimesWithFor(str, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3))

//while loop 
function repeatStringNumTimesWithWhile(str, num) {
  let result = ''
  let counter = 0;
  while (counter < num) {
    result += str;
    counter++;
  }
  return result;
}
console.log('while', repeatStringNumTimesWithWhile('abc', 3));
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = '';
  let i = 0;
  if (num > 0) {
    do {
      result += str;
      i++;
    } while (i < num);
  }
  return result;
}
console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 0));
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
