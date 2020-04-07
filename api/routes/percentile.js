const express = require('express');
const router = express.Router();
const percentile = require("percentile");

const result25 = percentile(
  25,
  [
    { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 },
    { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }
  ],
   // function to extract a value from an object
  item => item.val
);

const result50 = percentile(
    50,
    [
      { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 },
      { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }
    ],
     // function to extract a value from an object
    item => item.val
);
  
const result75 = percentile(
    75,
    [
      { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 },
      { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }
    ],
     // function to extract a value from an object
    item => item.val
);

const result100 = percentile(
    100,
    [
      { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 },
      { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }
    ],
     // function to extract a value from an object
    item => item.val
);


module.exports = router;
