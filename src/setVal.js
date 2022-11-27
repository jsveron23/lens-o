import { set, curry, lensPath, compose } from 'ramda';
import parsePath from './parsePath';

function setVal(path, v, o) {
  const lens = compose(lensPath, parsePath)(path);

  return set(lens, v, o);
}

export default curry(setVal);
