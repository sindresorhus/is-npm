import test from 'ava';
import {isNpm} from '.';

test('main', t => {
	t.true(isNpm);
});
