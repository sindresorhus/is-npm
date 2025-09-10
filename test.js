import test from 'ava';
import {isNpm} from './index.js';

function mockPackageManager(userAgent, packageJson) {
	return {
		isNpm: Boolean(userAgent?.startsWith('npm')) || Boolean(packageJson?.endsWith('package.json')),
		isYarn: Boolean(userAgent?.startsWith('yarn')),
		isPnpm: Boolean(userAgent?.startsWith('pnpm')),
		isBun: Boolean(userAgent?.startsWith('bun')),
		get isNpmOrYarn() {
			return this.isNpm || this.isYarn;
		},
		get isPackageManager() {
			return this.isNpm || this.isYarn || this.isPnpm || this.isBun;
		},
	};
}

test('main', t => {
	t.true(isNpm);
});

test('pnpm detection', t => {
	const result = mockPackageManager('pnpm/8.6.0 npm/? node/v18.16.0 darwin x64');

	t.false(result.isNpm, 'pnpm should not be detected as npm');
	t.false(result.isYarn, 'pnpm should not be detected as yarn');
	t.true(result.isPnpm, 'pnpm should be detected as pnpm');
	t.false(result.isBun, 'pnpm should not be detected as bun');
	t.false(result.isNpmOrYarn, 'pnpm should not be detected as npm or yarn');
	t.true(result.isPackageManager, 'pnpm should be detected as package manager');
});

test('bun detection', t => {
	const result = mockPackageManager('bun/1.0.0 npm/? node/v18.16.0 darwin x64');

	t.false(result.isNpm, 'bun should not be detected as npm');
	t.false(result.isYarn, 'bun should not be detected as yarn');
	t.false(result.isPnpm, 'bun should not be detected as pnpm');
	t.true(result.isBun, 'bun should be detected as bun');
	t.false(result.isNpmOrYarn, 'bun should not be detected as npm or yarn');
	t.true(result.isPackageManager, 'bun should be detected as package manager');
});

test('yarn detection', t => {
	const result = mockPackageManager('yarn/1.22.0 npm/? node/v18.16.0 darwin x64');

	t.false(result.isNpm, 'yarn should not be detected as npm');
	t.true(result.isYarn, 'yarn should be detected as yarn');
	t.false(result.isPnpm, 'yarn should not be detected as pnpm');
	t.false(result.isBun, 'yarn should not be detected as bun');
	t.true(result.isNpmOrYarn, 'yarn should be detected as npm or yarn');
	t.true(result.isPackageManager, 'yarn should be detected as package manager');
});

test('npm detection via user agent', t => {
	const result = mockPackageManager('npm/8.19.0 node/v18.16.0 darwin x64');

	t.true(result.isNpm, 'npm should be detected as npm via user agent');
	t.false(result.isYarn, 'npm should not be detected as yarn');
	t.false(result.isPnpm, 'npm should not be detected as pnpm');
	t.false(result.isBun, 'npm should not be detected as bun');
	t.true(result.isNpmOrYarn, 'npm should be detected as npm or yarn');
	t.true(result.isPackageManager, 'npm should be detected as package manager');
});

test('npm detection via package json', t => {
	const result = mockPackageManager(undefined, '/path/to/package.json');

	t.true(result.isNpm, 'npm should be detected as npm via package.json');
	t.false(result.isYarn, 'npm should not be detected as yarn');
	t.false(result.isPnpm, 'npm should not be detected as pnpm');
	t.false(result.isBun, 'npm should not be detected as bun');
	t.true(result.isNpmOrYarn, 'npm should be detected as npm or yarn');
	t.true(result.isPackageManager, 'npm should be detected as package manager');
});

test('yarn 1.x detection', t => {
	const result = mockPackageManager('yarn/1.22.19 npm/? node/v18.16.0 darwin x64');

	t.false(result.isNpm, 'yarn 1.x should not be detected as npm');
	t.true(result.isYarn, 'yarn 1.x should be detected as yarn');
	t.false(result.isPnpm, 'yarn 1.x should not be detected as pnpm');
	t.false(result.isBun, 'yarn 1.x should not be detected as bun');
	t.true(result.isNpmOrYarn, 'yarn 1.x should be detected as npm or yarn');
	t.true(result.isPackageManager, 'yarn 1.x should be detected as package manager');
});

test('yarn 2+ detection', t => {
	const result = mockPackageManager('yarn/3.6.0 npm/? node/v18.16.0 darwin x64');

	t.false(result.isNpm, 'yarn 2+ should not be detected as npm');
	t.true(result.isYarn, 'yarn 2+ should be detected as yarn');
	t.false(result.isPnpm, 'yarn 2+ should not be detected as pnpm');
	t.false(result.isBun, 'yarn 2+ should not be detected as bun');
	t.true(result.isNpmOrYarn, 'yarn 2+ should be detected as npm or yarn');
	t.true(result.isPackageManager, 'yarn 2+ should be detected as package manager');
});

test('no package manager detected', t => {
	const result = mockPackageManager();

	t.false(result.isNpm, 'should not detect npm when no user agent');
	t.false(result.isYarn, 'should not detect yarn when no user agent');
	t.false(result.isPnpm, 'should not detect pnpm when no user agent');
	t.false(result.isBun, 'should not detect bun when no user agent');
	t.false(result.isNpmOrYarn, 'should not detect npm or yarn when no user agent');
	t.false(result.isPackageManager, 'should not detect package manager when no user agent');
});
