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
import { parsePath, getVal, setVal } from 'lens-o';

const path = parsePath('a.b.1.c');
// path = ['a', 'b', 1, 'c']
// path[2] = 1 - index of array
const path = parsePath.ignore('a.b.-1.c');
// path = ['a', 'b', 'c']
const path = parsePath.unsafe('a.b.-1.c');
// path = ['a', 'b', 0, 'c'] - replace nagative index to zero
const path = parsePath.abs('a.b.-1.c');
// path = ['a', 'b', 1, 'c'] - absolute number

const val = getVal('a.b.1.c', {
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
const val = getVal(path, {
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

const val = setVal('a.b.1.c', 'x', {
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
const val = setVal(path, 'x', {
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
