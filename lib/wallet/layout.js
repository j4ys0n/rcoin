/*!
 * layout.js - data layout for wallets
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const rdb = require('bdb');

/*
 * Wallet Database Layout:
 *  V -> db version
 *  O -> flags
 *  R -> chain sync state
 *  D -> wallet id depth
 *  p[addr-hash] -> wallet ids
 *  P[wid][addr-hash] -> path data
 *  r[wid][index][hash] -> path account index
 *  w[wid] -> wallet
 *  W[wid] -> wallet id
 *  l[id] -> wid
 *  a[wid][index] -> account
 *  i[wid][name] -> account index
 *  n[wid][index] -> account name
 *  h[height] -> recent block hash
 *  b[height] -> block->wid map
 *  o[hash][index] -> outpoint->wid map
 *  T[hash] -> tx->wid map
 *  t[wid]* -> txdb
 */

exports.wdb = {
  V: rdb.key('V'),
  O: rdb.key('O'),
  R: rdb.key('R'),
  D: rdb.key('D'),
  p: rdb.key('p', ['hash']),
  P: rdb.key('P', ['uint32', 'hash']),
  r: rdb.key('r', ['uint32', 'uint32', 'hash']),
  w: rdb.key('w', ['uint32']),
  W: rdb.key('W', ['uint32']),
  l: rdb.key('l', ['ascii']),
  a: rdb.key('a', ['uint32', 'uint32']),
  i: rdb.key('i', ['uint32', 'ascii']),
  n: rdb.key('n', ['uint32', 'uint32']),
  h: rdb.key('h', ['uint32']),
  b: rdb.key('b', ['uint32']),
  o: rdb.key('o', ['hash256', 'uint32']),
  T: rdb.key('T', ['hash256']),
  t: rdb.key('t', ['uint32'])
};

/*
 * TXDB Database Layout:
 *   R -> wallet balance
 *   r[account] -> account balance
 *   t[hash] -> extended tx
 *   c[hash][index] -> coin
 *   d[hash][index] -> undo coin
 *   s[hash][index] -> spent by hash
 *   p[hash] -> dummy (pending flag)
 *   m[time][hash] -> dummy (tx by time)
 *   h[height][hash] -> dummy (tx by height)
 *   T[account][hash] -> dummy (tx by account)
 *   P[account][hash] -> dummy (pending tx by account)
 *   M[account][time][hash] -> dummy (tx by time + account)
 *   H[account][height][hash] -> dummy (tx by height + account)
 *   C[account][hash][index] -> dummy (coin by account)
 *   b[height] -> block record
 */

exports.txdb = {
  prefix: rdb.key('t', ['uint32']),
  R: rdb.key('R'),
  r: rdb.key('r', ['uint32']),
  t: rdb.key('t', ['hash256']),
  c: rdb.key('c', ['hash256', 'uint32']),
  d: rdb.key('d', ['hash256', 'uint32']),
  s: rdb.key('s', ['hash256', 'uint32']),
  p: rdb.key('p', ['hash256']),
  m: rdb.key('m', ['uint32', 'hash256']),
  h: rdb.key('h', ['uint32', 'hash256']),
  T: rdb.key('T', ['uint32', 'hash256']),
  P: rdb.key('P', ['uint32', 'hash256']),
  M: rdb.key('M', ['uint32', 'uint32', 'hash256']),
  H: rdb.key('H', ['uint32', 'uint32', 'hash256']),
  C: rdb.key('C', ['uint32', 'hash256', 'uint32']),
  b: rdb.key('b', ['uint32'])
};
