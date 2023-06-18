// @ts-check

import getImpelementation from '../implementations/index.js';

const makeCart = getImpelementation();

let cart;
// BEGIN (write your solution here)
beforeAll(() => {
  cart = makeCart();
  cart.addItem({ name: 'car', price: 3 }, 1);
  cart.addItem({ name: 'house', price: 30 }, 3);
});

test('makeCart', () => {
  expect(cart.getItems()).toEqual([{ product: { name: 'car', price: 3 }, count: 1 }, { product: { name: 'house', price: 30 }, count: 3 }]);
  expect(cart.getCost()).toEqual(93);
  expect(cart.getCount()).toEqual(4);
  expect(cart.getItems().length).toEqual(2);
});
// END
