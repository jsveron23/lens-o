import { view, curry, lensPath, compose } from 'ramda';
import parsePath from './parsePath';

function getVal(path, o) {
  const lens = compose(lensPath, parsePath)(path);

  return view(lens, o);
}

export default curry(getVal);
