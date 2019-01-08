/*!
 * seeds.js - seeds for rcoin
 * Copyright (c) 2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const main = require('./main');
const testnet = require('./testnet');

exports.get = function get(type) {
  switch (type) {
    case 'main':
      return main;
    case 'testnet':
      return testnet;
    default:
      return [];
  }
};
