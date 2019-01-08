/*!
 * workers.js - worker processes for rcoin
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License)
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const bio = require('rufio');

/**
 * Framer
 * @alias module:workers.Framer
 */

class Framer {
  /**
   * Create a framer.
   * @constructor
   */

  constructor() {}

  packet(payload) {
    const size = 10 + payload.getSize();
    const bw = bio.write(size);

    bw.writeU32(payload.id);
    bw.writeU8(payload.cmd);
    bw.seek(4);

    payload.toWriter(bw);

    bw.writeU8(0x0a);

    const msg = bw.render();
    msg.writeUInt32LE(msg.length - 10, 5, true);

    return msg;
  }
}

/*
 * Expose
 */

module.exports = Framer;
