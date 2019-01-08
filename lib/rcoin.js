/*!
 * rcoin.js - a javascript ravencoin library.
 * Copyright (c) 2018, MSFTerver
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

/* eslint prefer-arrow-callback: "off" */

'use strict';

/**
 * A rcoin "environment" which exposes all
 * constructors for primitives, the blockchain,
 * mempool, wallet, etc. It also exposes a
 * global worker pool.
 *
 * @exports rcoin
 * @type {Object}
 */

const rcoin = exports;

/**
 * Define a module for lazy loading.
 * @param {String} name
 * @param {String} path
 */

rcoin.define = function define(name, path) {
  let cache = null;
  Object.defineProperty(rcoin, name, {
    enumerable: true,
    get() {
      if (!cache)
        cache = require(path);
      return cache;
    }
  });
};

/**
 * Set the default network.
 * @param {String} network
 */

rcoin.set = function set(network) {
  rcoin.Network.set(network);
  return rcoin;
};

/*
 * Expose
 */

// Blockchain
rcoin.define('blockchain', './blockchain');
rcoin.define('Chain', './blockchain/chain');
rcoin.define('ChainEntry', './blockchain/chainentry');

// RVN
rcoin.define('rvn', './rvn');
rcoin.define('Amount', './rvn/amount');
rcoin.define('URI', './rvn/uri');

// Coins
rcoin.define('coins', './coins');
rcoin.define('Coins', './coins/coins');
rcoin.define('CoinEntry', './coins/coinentry');
rcoin.define('CoinView', './coins/coinview');

// HD
rcoin.define('hd', './hd');
rcoin.define('HDPrivateKey', './hd/private');
rcoin.define('HDPublicKey', './hd/public');
rcoin.define('Mnemonic', './hd/mnemonic');

// Mempool
rcoin.define('mempool', './mempool');
rcoin.define('Fees', './mempool/fees');
rcoin.define('Mempool', './mempool/mempool');
rcoin.define('MempoolEntry', './mempool/mempoolentry');

// Miner
rcoin.define('mining', './mining');
rcoin.define('Miner', './mining/miner');

// Net
rcoin.define('net', './net');
rcoin.define('packets', './net/packets');
rcoin.define('Peer', './net/peer');
rcoin.define('Pool', './net/pool');

// Node
rcoin.define('node', './node');
rcoin.define('Node', './node/node');
rcoin.define('FullNode', './node/fullnode');
rcoin.define('SPVNode', './node/spvnode');

// Primitives
rcoin.define('primitives', './primitives');
rcoin.define('Address', './primitives/address');
rcoin.define('Block', './primitives/block');
rcoin.define('Coin', './primitives/coin');
rcoin.define('Headers', './primitives/headers');
rcoin.define('Input', './primitives/input');
rcoin.define('InvItem', './primitives/invitem');
rcoin.define('KeyRing', './primitives/keyring');
rcoin.define('MerkleBlock', './primitives/merkleblock');
rcoin.define('MTX', './primitives/mtx');
rcoin.define('Outpoint', './primitives/outpoint');
rcoin.define('Output', './primitives/output');
rcoin.define('TX', './primitives/tx');

// Protocol
rcoin.define('protocol', './protocol');
rcoin.define('consensus', './protocol/consensus');
rcoin.define('Network', './protocol/network');
rcoin.define('networks', './protocol/networks');
rcoin.define('policy', './protocol/policy');

// Script
rcoin.define('script', './script');
rcoin.define('Opcode', './script/opcode');
rcoin.define('Program', './script/program');
rcoin.define('Script', './script/script');
rcoin.define('ScriptNum', './script/scriptnum');
rcoin.define('SigCache', './script/sigcache');
rcoin.define('Stack', './script/stack');
rcoin.define('Witness', './script/witness');

// Utils
rcoin.define('utils', './utils');
rcoin.define('util', './utils/util');

// Wallet
rcoin.define('wallet', './wallet');
rcoin.define('Path', './wallet/path');
rcoin.define('WalletKey', './wallet/walletkey');
rcoin.define('WalletDB', './wallet/walletdb');

// Workers
rcoin.define('workers', './workers');
rcoin.define('WorkerPool', './workers/workerpool');

// Package Info
rcoin.define('pkg', './pkg');
