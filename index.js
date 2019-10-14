'use strict';

const userAgent = process.env.npm_config_user_agent;
const isYarn = Boolean(userAgent && userAgent.startsWith('yarn'));
const isNpm = Boolean(userAgent && userAgent.startsWith('npm'));

// TODO: This named export should be replaced by a default export as soon as we move to ES modules
exports.isNpmOrYarn = isNpm || isYarn;
exports.isNpm = isNpm;
exports.isYarn = isYarn;
