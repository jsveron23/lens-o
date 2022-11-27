import { is, set, curry, lensPath, compose } from 'ramda';
import parsePath from './parsePath';

function setVal(path, v, o) {
  let lens;

  if (is(String, path)) {
    lens = compose(lensPath, parsePath)(path);
  } else if (is(Array, path)) {
    lens = lensPath(path);
  }

  return set(lens, v, o);
}

export default curry(setVal);
