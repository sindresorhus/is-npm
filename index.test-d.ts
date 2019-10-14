import {expectType} from 'tsd-check';
import {isNpmOrYarn, isYarn, isNpm} from '.';

expectType<boolean>(isNpmOrYarn);
expectType<boolean>(isNpm);
expectType<boolean>(isYarn);
