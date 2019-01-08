/*!
 * worker.js - worker thread/process for rcoin
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License)
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

const Master = require('./master');
const server = new Master();

server.listen();
