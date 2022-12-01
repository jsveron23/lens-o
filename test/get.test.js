// eslint-disable-next-line import/no-unresolved
import test from 'ava';
import get from '../src/get';

test('get: Standard usage', (t) => {
  t.is(
    get('a.b.1.c', {
      a: {
        b: [
          {
            c: 'hello',
          },
          {
            c: 'world',
          },
        ],
      },
    }),
    'world',
  );

  t.is(
    get(['a', 'b', 1, 'c'], {
      a: {
        b: [
          {
            c: 'hello',
          },
          {
            c: 'world',
          },
        ],
      },
    }),
    'world',
  );
});
