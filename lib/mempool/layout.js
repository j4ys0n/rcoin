/*!
 * layout.js - mempool data layout for rcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const rdb = require('bdb');

/*
 * Database Layout:
 *   V -> db version
 *   v -> serialization version
 *   R -> tip hash
 *   e[hash] -> entry
 */

const layout = {
  V: rdb.key('V'),
  v: rdb.key('v'),
  R: rdb.key('R'),
  F: rdb.key('F'),
  e: rdb.key('e', ['hash256'])
};

/*
 * Expose
 */

module.exports = layout;
