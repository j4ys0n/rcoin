/*!
 * undocoins.js - undocoins object for rcoin
 * Copyright (c) 2018, MSFTserver
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const pkg = exports;

/**
 * Package Name
 * @const {String}
 * @default
 */

pkg.name = require('../package.json').name;

/**
 * Project Name
 * @const {String}
 * @default
 */

pkg.core = 'rcoin';

/**
 * Organization Name
 * @const {String}
 * @default
 */

pkg.organization = 'rcoin-org';

/**
 * Currency Name
 * @const {String}
 * @default
 */

pkg.currency = 'ravencoin';

/**
 * Currency Unit
 * @const {String}
 * @default
 */

pkg.unit = 'rvn';

/**
 * Base Unit
 * @const {String}
 * @default
 */

pkg.base = 'satoshi';

/**
 * Config file name.
 * @const {String}
 * @default
 */

pkg.cfg = `${pkg.core}.conf`;

/**
 * Repository URL.
 * @const {String}
 * @default
 */

pkg.url = `https://github.com/${pkg.organization}/${pkg.name}`;

/**
 * Current version string.
 * @const {String}
 */

pkg.version = require('../package.json').version;
