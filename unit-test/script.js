// @ts-check

import getImplementation from '../implementations/index.js';

const makeValidator = getImplementation();

// BEGIN (write your solution here)
test('makeValidator', () => {
  const validator = makeValidator();
  expect(validator.isValid('test')).toBeTruthy();
  validator.addCheck((v) => v > 5);
  expect(validator.isValid(5)).toBeFalsy();
  expect(validator.isValid(6)).toBeTruthy();
  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(8)).toBeTruthy();
  expect(validator.isValid(6)).toBeTruthy();
});
// END
