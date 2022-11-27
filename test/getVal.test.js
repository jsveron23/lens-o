import test from 'ava';
import getVal from '../src/getVal';

test('getVal: Standard usage', (t) => {
  t.is(
    getVal('a.b.1.c', {
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
    getVal(['a', 'b', 1, 'c'], {
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
