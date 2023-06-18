// @ts-check

const get = (obj, str, key) => {return str};

// BEGIN (write your solution here)
if (get({hello: 'world'}, 'hello') !== 'world') {
  throw new Error('Функция работает неправильно!');
}

if (get({},'key','key') !== 'key') {
  throw new Error('Функция работает неправильно!');
}

if (get({ hello: 'world' }, 'hello', 'kitty') !== 'world') {
  throw new Error('Функция работает неправильно!');
}
// END
