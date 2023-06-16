// @ts-check

import { strict as assert } from 'assert';

const indexOf = (arr, num, num2) => {return 0} ;

// BEGIN (write your solution here)

const arr = [1, 2, 3, 4, 1];

assert(indexOf(arr, 1) === 0);
assert(indexOf(arr, 1, 3) === 4);
assert(indexOf(arr, 8) === -1);

// END

