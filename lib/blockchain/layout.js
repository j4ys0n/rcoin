/*!
 * layout.js - blockchain data layout for rcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const rdb = require('bdb');

/*
 * Database Layout:
 *   V -> db version
 *   O -> chain options
 *   R -> tip hash
 *   D -> versionbits deployments
 *   e[hash] -> entry
 *   h[hash] -> height
 *   H[height] -> hash
 *   n[hash] -> next hash
 *   p[hash] -> tip index
 *   b[hash] -> block
 *   t[hash] -> extended tx
 *   c[hash] -> coins
 *   u[hash] -> undo coins
 *   v[bit][hash] -> versionbits state
 *   T[addr-hash][hash] -> dummy (tx by address)
 *   C[addr-hash][hash][index] -> dummy (coin by address)
 */

const layout = {
  V: rdb.key('V'),
  O: rdb.key('O'),
  R: rdb.key('R'),
  D: rdb.key('D'),
  e: rdb.key('e', ['hash256']),
  h: rdb.key('h', ['hash256']),
  H: rdb.key('H', ['uint32']),
  n: rdb.key('n', ['hash256']),
  p: rdb.key('p', ['hash256']),
  b: rdb.key('b', ['hash256']),
  t: rdb.key('t', ['hash256']),
  c: rdb.key('c', ['hash256', 'uint32']),
  u: rdb.key('u', ['hash256']),
  v: rdb.key('v', ['uint8', 'hash256']),
  T: rdb.key('T', ['hash', 'hash256']),
  C: rdb.key('C', ['hash', 'hash256', 'uint32'])
};

/*
 * Expose
 */

module.exports = layout;
