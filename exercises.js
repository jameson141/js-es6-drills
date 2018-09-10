/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 * 
 */
var stringCount = str => {
  return str.length;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = array => {
  return array.lengths;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = arr => {
  return arr.reduce((accum,curr) => {
    return accum + curr
  })
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = arr => {
  return arr.map(index = index.length);
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = arr => { 
  return arr.reduce( (accum, cur) => accum + cur.length);
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = str => {
  return.str.reduce((accum,cur) => {
    return accum.push(cur);
  })
};





/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = arr => {
  return arr[arr.length-1].length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = arr => {
  arr.reduce( (accum,cur) => {
    return cur.length > 10? accum += 1 : accum
  },0)
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = arr => {
  return arr.reduce( (accum, cur) => {
    return cur.length > 10? accum += 1 : accum
  },0)
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = arr =>{
  return arr.reduce( (accum,cur) => {
    return arr.reduce( (accum,cur) => accum * cur,1)
  
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = arr => {
  return arr.reduce( (accum,cur) => {
    return cur >- 0? accum +cur : accum
},0)
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = arr => {
  return arr.reduce( (accum,cur) => {
    return cur.length <= 3 ? : accum
  },0)
};

/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = arr => arr.map(element => element * 2);

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */

module.exports = {
  stringCount: null,
  arrayLength: null,
  countAll: null,
  countStrings: null,
  countAllStrings: null,
  splitString: null,
  lengthOfLast: null,
  sumBelowTen: null,
  moreThanTenLetters: null,
  multiplyAll: null,
  sumAllPositive: null,
  stringCountBelowThree: null,
  doubleArray: null,
  countObjects: null
};
