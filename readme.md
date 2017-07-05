# is-npm [![Build Status](https://travis-ci.org/sindresorhus/is-npm.svg?branch=master)](https://travis-ci.org/sindresorhus/is-npm)

> Check if your code is running as an [npm](https://www.npmjs.org/doc/misc/npm-scripts.html) or [yarn](https://yarnpkg.com/lang/en/docs/cli/run/) script


## Install

```sh
$ npm install --save is-npm
```


## Usage

```js
var isNpm = require('is-npm');
console.log(isNpm);
```

```sh
$ node foo.js
#=> false
$ npm run foo
#=> true
$ yarn run foo
#=> true
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
