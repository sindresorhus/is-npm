import {expectType} from 'tsd';
import {isNpmOrYarn, isYarn, isNpm} from '.';

expectType<boolean>(isNpmOrYarn);
expectType<boolean>(isNpm);
expectType<boolean>(isYarn);
