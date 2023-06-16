import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();

// BEGIN (write your solution here)
const arr = [1, 2, 3];
assert.deepEqual(take(arr, 1), [1]);
assert.deepEqual(take(arr, -1), []);
assert.deepEqual(take(arr, 9), arr);
// END
