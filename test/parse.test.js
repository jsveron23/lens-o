import test from 'ava';
import parse from '../src/parse';

test('parse: Standard usage', (t) => {
  t.deepEqual(parse('a.b.1.c'), ['a', 'b', 1, 'c']);
  t.deepEqual(parse('a.b.c'), ['a', 'b', 'c']);
  t.throws(() => parse('a.b.-8.c'));
});

test('parse: Ignore nagative index', (t) => {
  t.deepEqual(parse.ignore('a.b.-1.c'), ['a', 'b', 'c']);
});

test('parse: Replace nagative index to zero', (t) => {
  t.deepEqual(parse.unsafe('a.b.-1.c'), ['a', 'b', 0, 'c']);
  t.deepEqual(parse.unsafe('a.b.0.c'), ['a', 'b', 0, 'c']);
  t.deepEqual(parse.unsafe('a.b.c'), ['a', 'b', 'c']);
});

test('parse: Replace nagative index to absolute number', (t) => {
  t.deepEqual(parse.abs('a.b.-3.c'), ['a', 'b', 3, 'c']);
});

test('parse: Parse onlt string', (t) => {
  t.throws(() => parse([]));
  t.throws(() => parse({}));
  t.throws(() => parse(1));
});
