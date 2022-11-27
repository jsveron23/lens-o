import test from 'ava';
import setVal from '../src/setVal';

test('setVal: Standard usage', (t) => {
  t.deepEqual(
    setVal('a.b.1.c', 'x', {
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
});
