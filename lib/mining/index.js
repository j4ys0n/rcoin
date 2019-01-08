/*!
 * mining/index.js - mining infrastructure for rcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

/**
 * @module mining
 */

exports.common = require('./common');
exports.CPUMiner = require('./cpuminer');
exports.mine = require('./mine');
exports.Miner = require('./miner');
exports.BlockTemplate = require('./template');
