const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')
assert(range(5), [0,1,2,3,4])

/*function sumAll(a, b) {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  let result = 0;
  for (var i=min; i <= max; i++){
      result += i;
  }
return result;
}*/

function sumAll(a, b) {
    const avg = (a+b)/2
    const n = Math.abs(b-a)+1
    return avg*n;
}

assert(10, sumAll(1, 4));
assert(10, sumAll(4, 1));
assert(1, sumAll(1, 1));
assert(45, sumAll(5, 10));
assert(5050, sumAll(1, 100));


print('#####  end  #####')
