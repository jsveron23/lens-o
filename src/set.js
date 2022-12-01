import { is, set as _set, curry, lensPath, compose, identity } from 'ramda';
import parse from './parse';

/**
 * Set given value to object and return as new object
 * @param {String|Array} path
 * @param {*}            v
 * @param {Object|Array} o
 */
function set(path, v, o) {
  let fn = identity;

  if (is(String, path)) {
    fn = parse;
  }

  return compose((lens) => _set(lens, v, o), lensPath, fn)(path);
}

export default curry(set);
