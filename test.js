import test from 'ava';
import {isNpm} from './index.js';

test('main', t => {
	t.true(isNpm);
});
