/*!
 * amount.js - amount object for rcoin
 * Copyright (c) 2018, MSFTerver
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const assert = require('bsert');
const fixed = require('../utils/fixed');

/**
 * Amount
 * Represents a ravencoin amount (satoshis internally).
 * @alias module:rvn.Amount
 * @property {Amount} value
 */

class Amount {
  /**
   * Create an amount.
   * @constructor
   * @param {(String|Number)?} value
   * @param {String?} unit
   */

  constructor(value, unit) {
    this.value = 0;

    if (value != null)
      this.fromOptions(value, unit);
  }

  /**
   * Inject properties from options.
   * @private
   * @param {(String|Number)?} value
   * @param {String?} unit
   * @returns {Amount}
   */

  fromOptions(value, unit) {
    if (typeof unit === 'string')
      return this.from(unit, value);

    if (typeof value === 'number')
      return this.fromValue(value);

    return this.fromRVN(value);
  }

  /**
   * Get satoshi value.
   * @returns {Amount}
   */

  toValue() {
    return this.value;
  }

  /**
   * Get satoshi string or value.
   * @param {Boolean?} num
   * @returns {String|Amount}
   */

  toSatoshis(num) {
    if (num)
      return this.value;

    return this.value.toString(10);
  }

  /**
   * Get bits string or value.
   * @param {Boolean?} num
   * @returns {String|Amount}
   */

  toBits(num) {
    return Amount.encode(this.value, 2, num);
  }

  /**
   * Get mrvn string or value.
   * @param {Boolean?} num
   * @returns {String|Amount}
   */

  toMRVN(num) {
    return Amount.encode(this.value, 5, num);
  }

  /**
   * Get rvn string or value.
   * @param {Boolean?} num
   * @returns {String|Amount}
   */

  toRVN(num) {
    return Amount.encode(this.value, 8, num);
  }

  /**
   * Get unit string or value.
   * @param {String} unit - Can be `sat`,
   * `urvn`, `bits`, `mrvn`, or `rvn`.
   * @param {Boolean?} num
   * @returns {String|Amount}
   */

  to(unit, num) {
    switch (unit) {
      case 'sat':
        return this.toSatoshis(num);
      case 'urvn':
      case 'bits':
        return this.toBits(num);
      case 'mrvn':
        return this.toMRVN(num);
      case 'rvn':
        return this.toRVN(num);
    }
    throw new Error(`Unknown unit "${unit}".`);
  }

  /**
   * Convert amount to ravencoin string.
   * @returns {String}
   */

  toString() {
    return this.toRVN();
  }

  /**
   * Inject properties from value.
   * @private
   * @param {Amount} value
   * @returns {Amount}
   */

  fromValue(value) {
    assert(Number.isSafeInteger(value) && value >= 0,
      'Value must be an int64.');
    this.value = value;
    return this;
  }

  /**
   * Inject properties from satoshis.
   * @private
   * @param {Number|String} value
   * @returns {Amount}
   */

  fromSatoshis(value) {
    this.value = Amount.decode(value, 0);
    return this;
  }

  /**
   * Inject properties from bits.
   * @private
   * @param {Number|String} value
   * @returns {Amount}
   */

  fromBits(value) {
    this.value = Amount.decode(value, 2);
    return this;
  }

  /**
   * Inject properties from mrvn.
   * @private
   * @param {Number|String} value
   * @returns {Amount}
   */

  fromMRVN(value) {
    this.value = Amount.decode(value, 5);
    return this;
  }

  /**
   * Inject properties from rvn.
   * @private
   * @param {Number|String} value
   * @returns {Amount}
   */

  fromRVN(value) {
    this.value = Amount.decode(value, 8);
    return this;
  }

  /**
   * Inject properties from unit.
   * @private
   * @param {String} unit
   * @param {Number|String} value
   * @returns {Amount}
   */

  from(unit, value) {
    switch (unit) {
      case 'sat':
        return this.fromSatoshis(value);
      case 'urvn':
      case 'bits':
        return this.fromBits(value);
      case 'mrvn':
        return this.fromMRVN(value);
      case 'rvn':
        return this.fromRVN(value);
    }
    throw new Error(`Unknown unit "${unit}".`);
  }

  /**
   * Instantiate amount from options.
   * @param {(String|Number)?} value
   * @param {String?} unit
   * @returns {Amount}
   */

  static fromOptions(value, unit) {
    return new this().fromOptions(value, unit);
  }

  /**
   * Instantiate amount from value.
   * @private
   * @param {Amount} value
   * @returns {Amount}
   */

  static fromValue(value) {
    return new this().fromValue(value);
  }

  /**
   * Instantiate amount from satoshis.
   * @param {Number|String} value
   * @returns {Amount}
   */

  static fromSatoshis(value) {
    return new this().fromSatoshis(value);
  }

  /**
   * Instantiate amount from bits.
   * @param {Number|String} value
   * @returns {Amount}
   */

  static fromBits(value) {
    return new this().fromBits(value);
  }

  /**
   * Instantiate amount from mrvn.
   * @param {Number|String} value
   * @returns {Amount}
   */

  static fromMRVN(value) {
    return new this().fromMRVN(value);
  }

  /**
   * Instantiate amount from rvn.
   * @param {Number|String} value
   * @returns {Amount}
   */

  static fromRVN(value) {
    return new this().fromRVN(value);
  }

  /**
   * Instantiate amount from unit.
   * @param {String} unit
   * @param {Number|String} value
   * @returns {Amount}
   */

  static from(unit, value) {
    return new this().from(unit, value);
  }

  /**
   * Inspect amount.
   * @returns {String}
   */

  inspect() {
    return `<Amount: ${this.toString()}>`;
  }

  /**
   * Safely convert satoshis to a RVN string.
   * This function explicitly avoids any
   * floating point arithmetic.
   * @param {Amount} value - Satoshis.
   * @returns {String} RVN string.
   */

  static rvn(value, num) {
    if (typeof value === 'string')
      return value;

    return Amount.encode(value, 8, num);
  }

  /**
   * Safely convert a RVN string to satoshis.
   * @param {String} str - RVN
   * @returns {Amount} Satoshis.
   * @throws on parse error
   */

  static value(str) {
    if (typeof str === 'number')
      return str;

    return Amount.decode(str, 8);
  }

  /**
   * Safely convert satoshis to a RVN string.
   * @param {Amount} value
   * @param {Number} exp - Exponent.
   * @param {Boolean} num - Return a number.
   * @returns {String|Number}
   */

  static encode(value, exp, num) {
    if (num)
      return fixed.toFloat(value, exp);
    return fixed.encode(value, exp);
  }

  /**
   * Safely convert a RVN string to satoshis.
   * @param {String|Number} value - RVN
   * @param {Number} exp - Exponent.
   * @returns {Amount} Satoshis.
   * @throws on parse error
   */

  static decode(value, exp) {
    if (typeof value === 'number')
      return fixed.fromFloat(value, exp);
    return fixed.decode(value, exp);
  }
}

/*
 * Expose
 */

module.exports = Amount;
