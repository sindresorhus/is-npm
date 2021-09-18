import {expectType} from 'tsd';
import {isNpmOrYarn, isYarn, isNpm} from './index.js';

expectType<boolean>(isNpmOrYarn);
expectType<boolean>(isNpm);
expectType<boolean>(isYarn);
