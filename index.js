import { lensPath, compose, reduce, split } from 'ramda';

/**
 * Parse string of object path (e.g. a.b.2.c)
 * @param  {String} path
 * @return {Array}
 */
export default function parsePath(path = '') {
  return compose(
    lensPath,
    reduce((acc, p) => {
      const n = Number(p);

      // key is string
      if (Number.isNaN(n)) {
        return [...acc, p];
      }

      // key is number or nagative number
      return n > -1 ? [...acc, n] : acc;
    }, []),
    split('.'),
  )(path);
}
