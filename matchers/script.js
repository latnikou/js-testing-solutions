// @ts-check

import getFunction from '../functions.js';

const gt = getFunction();

// BEGIN (write your solution here)
test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(1, 3)).toBeFalsy();
  expect(gt(3, 3)).toBeFalsy();
});
// END
