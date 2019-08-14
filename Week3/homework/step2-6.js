'use strict';
{
const arr2d = [[1, 2], [3, 4], [5, 6]];

const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
}

function flattenArray2d(arr) {

  let flattenArr2 = [];

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {

      flattenArr2.push(arr[i][j])

    }
  }
  return flattenArray2d;
}

function flattenArray3d(arr) {

  const flattenArr3 = [];

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {

      for (let l = 0; l < arr[i][j].length; l++) {

        flattenArr3.push(arr[i][j][l]);

      }}}

  return flattenArray3d;

}


module.exports = {

  flattenArray2d,

  flattenArray3d,

};