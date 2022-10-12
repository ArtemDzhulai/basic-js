const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
 let numberCats = 0;
 for (let i = 0; i < backyard.length; i++){
  for (let k = 0; k < backyard[i].length; k++){
    if(backyard[i][k] === "^^"){
      numberCats = numberCats + 1;
    }
  }
 }
 return numberCats;
}

module.exports = {
  countCats
};
