'use strict';
var test = require('ava');
var isNpm = require('./');

test(function (t) {
	t.assert(isNpm);
});
