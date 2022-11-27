import { is, set as _set, curry, lensPath, compose } from 'ramda';
import parse from './parse';

function set(path, v, o) {
  let lens;

  if (is(String, path)) {
    lens = compose(lensPath, parse)(path);
  } else if (is(Array, path)) {
    lens = lensPath(path);
  }

  return _set(lens, v, o);
}

export default curry(set);
