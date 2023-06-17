// @ts-check

const without = (arr, ...args) => {return 0};

// BEGIN (write your solution here)
const arr = [1, 2, 3, 4];
const coll = [1, 1, 1, 3];
test('without', () => {
  expect(without(arr, 1, 2, 3)).toEqual([4]);
  expect(without(coll, 1)).toEqual([3]);
  expect(without(coll, 3)).toEqual([1, 1, 1]);
  expect(without(coll, 1, 1, 1, 3)).toEqual([]);
});
// END
