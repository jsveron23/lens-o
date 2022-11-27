import { is, view, curry, lensPath, compose } from 'ramda';
import parse from './parse';

function get(path, o) {
  let lens;

  if (is(String, path)) {
    lens = compose(lensPath, parse)(path);
  } else if (is(Array, path)) {
    lens = lensPath(path);
  }

  return view(lens, o);
}

export default curry(get);
