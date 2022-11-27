import test from 'ava';
import parsePath from '../src/parsePath';

test('parsePath: Standard usage', (t) => {
  t.deepEqual(parsePath('a.b.1.c'), ['a', 'b', 1, 'c']);
  t.deepEqual(parsePath('a.b.c'), ['a', 'b', 'c']);
  t.throws(() => parsePath('a.b.-8.c'));
});

test('parsePath: Ignore nagative index', (t) => {
  t.deepEqual(parsePath.ignore('a.b.-1.c'), ['a', 'b', 'c']);
});

test('parsePath: Replace nagative index to zero', (t) => {
  t.deepEqual(parsePath.unsafe('a.b.-1.c'), ['a', 'b', 0, 'c']);
  t.deepEqual(parsePath.unsafe('a.b.0.c'), ['a', 'b', 0, 'c']);
  t.deepEqual(parsePath.unsafe('a.b.c'), ['a', 'b', 'c']);
});

test('parsePath: Replace nagative index to absolute number', (t) => {
  t.deepEqual(parsePath.abs('a.b.-3.c'), ['a', 'b', 3, 'c']);
});
