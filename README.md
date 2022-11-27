# o-path

- Parse object path
- Get value from parsed path
- Set value to parsed path

## Install

```
npm install o-path
```

## Usage

```js
import { parsePath, getVal, setVal } from 'o-path';

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
	a: 1,
	b: [
		{
			c: 'hello',
		},
		{
			c: 'world',
		},
	],
});
// val = world

const val = setVal('a.b.1.c', 'x', {
	a: 1,
	b: [
		{
			c: 'hello',
		},
		{
			c: 'world',
		},
	],
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
