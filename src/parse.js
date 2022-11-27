import { compose, reduce, split } from 'ramda';

function _reduce(handleIndex) {
  return reduce((acc, p) => {
    const n = Number(p);

    // key is string
    if (Number.isNaN(n)) {
      return [...acc, p];
    }

    return handleIndex(acc, n);
  }, []);
}

function parse(path) {
  return compose(
    _reduce((acc, n) => {
      if (n < 0) {
        throw new Error('Negative index is found!');
      }

      return [...acc, n];
    }),
    split('.'),
  )(path);
}

parse.ignore = function ignore(path) {
  return compose(
    _reduce((acc, n) => (n > -1 ? [...acc, n] : acc)),
    split('.'),
  )(path);
};

parse.unsafe = function unsafe(path) {
  return compose(
    _reduce((acc, n) => [...acc, n > -1 ? n : 0]),
    split('.'),
  )(path);
};

parse.abs = function abs(path) {
  return compose(
    _reduce((acc, n) => [...acc, Math.abs(n)]),
    split('.'),
  )(path);
};

export default parse;
