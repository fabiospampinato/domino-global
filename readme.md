# Domino Global

Make Node a browser-like environment, by using [Domino](https://github.com/fgnass/domino).

## Install

```sh
npm install --save domino domino-global
```

## Usage

Simply importing it will register the following browser-like globals:

```ts
import 'domino-global';

console.log ( typeof globalThis.widnow ); // => 'object'
console.log ( typeof globalThis.document ); // => 'object'
console.log ( typeof globalThis.location ); // => 'object'
```

## License

MIT © Fabio Spampinato
