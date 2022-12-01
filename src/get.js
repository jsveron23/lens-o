import { is, view, curry, lensPath, compose, identity, flip } from 'ramda';
import parse from './parse';

/**
 * Get value of object path
 * @param  {String|Array} path
 * @param  {Object|Array} o
 * @return {*}
 */
function get(path, o) {
  let fn = identity;

  if (is(String, path)) {
    fn = parse;
  }

  return compose(flip(view)(o), lensPath, fn)(path);
}

export default curry(get);
