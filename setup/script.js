// @ts-check

import getFunction from '../functions.js';

const set = getFunction();

// BEGIN (write your solution here)
let obj;

beforeAll(() => {
  obj = {};
});

test('set', () => {
  expect(set(obj, 'a', 4)).toEqual({ a: 4 });
  expect(set(obj, 'a[0]', 4)).toEqual({ a: [4] });
});
// END
