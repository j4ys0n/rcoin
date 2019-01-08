/*!
 * undocoins.js - undocoins object for rcoin
 * Copyright (c) 2018, MSFTserver
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License).
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

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
rcoin.blockchain = require('./blockchain');
rcoin.Chain = require('./blockchain/chain');
rcoin.ChainEntry = require('./blockchain/chainentry');

// RVN
rcoin.rvn = require('./rvn');
rcoin.Amount = require('./rvn/amount');
rcoin.URI = require('./rvn/uri');

// Coins
rcoin.coins = require('./coins');
rcoin.Coins = require('./coins/coins');
rcoin.CoinEntry = require('./coins/coinentry');
rcoin.CoinView = require('./coins/coinview');

// HD
rcoin.hd = require('./hd');
rcoin.HDPrivateKey = require('./hd/private');
rcoin.HDPublicKey = require('./hd/public');
rcoin.Mnemonic = require('./hd/mnemonic');

// Mempool
rcoin.mempool = require('./mempool');
rcoin.Fees = require('./mempool/fees');
rcoin.Mempool = require('./mempool/mempool');
rcoin.MempoolEntry = require('./mempool/mempoolentry');

// Miner
rcoin.mining = require('./mining');
rcoin.Miner = require('./mining/miner');

// Net
rcoin.net = require('./net');
rcoin.packets = require('./net/packets');
rcoin.Peer = require('./net/peer');
rcoin.Pool = require('./net/pool');

// Node
rcoin.node = require('./node');
rcoin.Node = require('./node/node');
rrcoin.FullNode = require('./node/fullnode');
rcoin.SPVNode = require('./node/spvnode');

// Primitives
rcoin.primitives = require('./primitives');
rcoin.Address = require('./primitives/address');
rcoin.Block = require('./primitives/block');
rcoin.Coin = require('./primitives/coin');
rcoin.Headers = require('./primitives/headers');
rcoin.Input = require('./primitives/input');
rcoin.InvItem = require('./primitives/invitem');
rcoin.KeyRing = require('./primitives/keyring');
rcoin.MerkleBlock = require('./primitives/merkleblock');
rcoin.MTX = require('./primitives/mtx');
rcoin.Outpoint = require('./primitives/outpoint');
rcoin.Output = require('./primitives/output');
rcoin.TX = require('./primitives/tx');

// Protocol
rcoin.protocol = require('./protocol');
rcoin.consensus = require('./protocol/consensus');
rcoin.Network = require('./protocol/network');
rcoin.networks = require('./protocol/networks');
rcoin.policy = require('./protocol/policy');

// Script
rcoin.script = require('./script');
rcoin.Opcode = require('./script/opcode');
rcoin.Program = require('./script/program');
rcoin.Script = require('./script/script');
rcoin.ScriptNum = require('./script/scriptnum');
rcoin.SigCache = require('./script/sigcache');
rcoin.Stack = require('./script/stack');
rcoin.Witness = require('./script/witness');

// Utils
rcoin.utils = require('./utils');
rcoin.util = require('./utils/util');

// Wallet
rcoin.wallet = require('./wallet');
rcoin.WalletDB = require('./wallet/walletdb');

// Workers
rcoin.workers = require('./workers');
rcoin.WorkerPool = require('./workers/workerpool');

// Package Info
rcoin.pkg = require('./pkg');
