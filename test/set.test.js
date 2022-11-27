import test from 'ava';
import set from '../src/set';

test('set: Standard usage', (t) => {
  t.deepEqual(
    set('a.b.1.c', 'x', {
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
    {
      a: {
        b: [
          {
            c: 'hello',
          },
          {
            c: 'x',
          },
        ],
      },
    },
  );

  t.deepEqual(
    set(['a', 'b'], 'x', {
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
    {
      a: {
        b: 'x',
      },
    },
  );
});
