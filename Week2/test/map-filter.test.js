
const { myNumbers, doubleOddNumbers } = require(`../homework/map-filter`);

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

// describe('hi',()=> {
//   test('return hi',() => {
//     expect(hi()).toEqual('hi');
//   });
// });

// describe('add_numbers', ()=>{
//   test('result ->')
// }
// )