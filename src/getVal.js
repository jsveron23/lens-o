import { is, view, curry, lensPath, compose } from 'ramda';
import parsePath from './parsePath';

function getVal(path, o) {
  let lens;

  if (is(String, path)) {
    lens = compose(lensPath, parsePath)(path);
  } else if (is(Array, path)) {
    lens = lensPath(path);
  }

  return view(lens, o);
}

export default curry(getVal);
