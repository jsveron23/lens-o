# lens-o [![npm](https://img.shields.io/npm/v/lens-o)](https://www.npmjs.com/package/lens-o)

- Parse object path
- Get value from parsed path
- Set value to parsed path

## Install

```
npm install lens-o
```

## Usage

```js
import { parse, get, set } from 'lens-o';

const path = parse('a.b.1.c');
// path = ['a', 'b', 1, 'c']
// path[2] = 1 - index of array
const path = parse.ignore('a.b.-1.c');
// path = ['a', 'b', 'c']
const path = parse.unsafe('a.b.-1.c');
// path = ['a', 'b', 0, 'c'] - replace nagative index to zero
const path = parse.abs('a.b.-1.c');
// path = ['a', 'b', 1, 'c'] - absolute number

const val = get('a.b.1.c', {
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
});
const val = get(path, {
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
});
// val = world

const val = set('a.b.1.c', 'x', {
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
});
const val = set(path, 'x', {
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
});
// val = {
// 	a: 1,
// 	b: [{
// 		c: 'hello'
// 	}, {
// 		c: 'x'
// 	}]
// }
```

## License

MIT
