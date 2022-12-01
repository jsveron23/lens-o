import { compose, append, is, reduce, split } from 'ramda';

/**
 * Compute string and number(callback)
 * @param  {Function} handleArrIndex
 * @return {Array}
 */
function compute(handleArrIndex) {
  return compose(
    reduce((acc, p) => {
      const n = Number(p);

      if (Number.isNaN(n)) {
        return [...acc, p];
      }

      return handleArrIndex(acc, n);
    }, []),
    split('.'),
  );
}

/**
 * Parse object path
 * @param  {String} path
 * @return {Array}
 */
function parse(path) {
  if (!is(String, path)) {
    throw new Error('Given value is must be string!');
  }

  return compute((acc, n) => {
    if (n < 0) {
      throw new Error('Negative index is found!');
    }

    return append(n, acc);
  })(path);
}

parse.ignore = compute((acc, n) => (n > 1 ? append(n, acc) : acc));
parse.unsafe = compute((acc, n) => append(n > -1 ? n : 0, acc));
parse.abs = compute((acc, n) => append(Math.abs(n), acc));

export default parse;
