# is-npm [![Build Status](https://travis-ci.org/sindresorhus/is-npm.svg?branch=master)](https://travis-ci.org/sindresorhus/is-npm)

> Check if your code is running as an [npm](https://docs.npmjs.com/misc/scripts) or [yarn](https://yarnpkg.com/lang/en/docs/cli/run/) script


## Install

```
$ npm install is-npm
```


## Usage

```js
const {isNpm} = require('is-npm');

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


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-npm?utm_source=npm-is-npm&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
