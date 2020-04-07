// With simple values
const percentile = require("percentile");
console.log(percentile(80, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 8
 
// With complex values
const percentile = require("percentile");
const result = percentile(
  80,
  [
    { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 },
    { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }
  ],
   // function to extract a value from an object
  item => item.val
);
console.log(result);

module.exports = store;