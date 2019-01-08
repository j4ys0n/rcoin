/*!
 * network.js - ravencoin networks for rcoin
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License)
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raven-community/rcoin
 */

'use strict';

/**
 * @module protocol/networks
 */

const BN = require('rcrypto/lib/bn.js');

const network = exports;

/*
 * Helpers
 */

function b(hash) {
  return Buffer.from(hash, 'hex');
}

/**
 * Network type list.
 * @memberof module:protocol/networks
 * @const {String[]}
 * @default
 */

network.types = ['main', 'testnet', 'regtest', 'simnet'];

/**
 * Mainnet
 * @static
 * @lends module:protocol/networks
 * @type {Object}
 */

const main = {};

/**
 * Symbolic network type.
 * @const {String}
 * @default
 */

main.type = 'main';

/**
 * Default DNS seeds.
 * @const {String[]}
 * @default
 */

main.seeds = [
  'seed-raven.bitactivate.com',
  'seed-raven.ravencoin.com',
  'seed-raven.ravencoin.org'
];

/**
 * Packet magic number.
 * @const {Number}
 * @default
 */

main.magic = 0x4e564152;

/**
 * Default network port.
 * @const {Number}
 * @default
 */

main.port = 8767;

/**
 * Checkpoint block list.
 * @const {Object}
 */

main.checkpointMap = {
  11111: b('e9fdfc9335ab8ecf32739dc4ecd14e78700e41a47c4e7a727bfd815f01000000'),
  33333: b('9be5ae55067c68b34147de6905dc6c9c1da583d6518ec8d89d4c681700000000'),
  74000: b('f8d819f1541c13a4a47dd1bc59c58ddeae182ae1b5bf73c3188f2b0000000000'),
  105000: b('e6ee3191a8b811ed1cbd4f669212fdee9ef2609b7d70dd96ee7d030000000000'),
  134444: b('eb22dc6add05b3b1707f5e11d31857be318c71b11ffaad9ac75d040000000000'),
  168000: b('1b27a368d624dfe91e0a940db2ef446d8928ac49721075967c57010000000000'),
  193000: b('bd940c9bb6486cb8c3dcd9a62a44a8fcbd179d109bc07d2baf87030000000000'),
  210000: b('865918f2d3e8320d0275c8b56883be93cb553d4771d84707451c000000000000'),
  216116: b('a75831e19e735582bf7ea1d0b23d59f86c9513b219534c08317b010000000000'),
  225430: b('8fd94e26c0734db53927af4d13d2fa5e4b625fb3a52a6ab1321c020000000000'),
  250000: b('2fa1c2a6632054ae730368d011df584d2b1441b909471953dfb1010000000000'),
  279000: b('b5c2ab9d9a7d018889048ba39683fc355b451b272d648b1fc029030000000000'),
  295000: b('6e50b8ce4c64c08f16b45fe507e80d4efaad57c54028f8d6043d030000000000'),
  300255: b('bb8c18daa20f17a63c5547e349d65612b890c116f5aedbf2a070010000000000'),
  319400: b('d9c98a5836ad5232dbc37ce2652d73afe306a1b53d6fcf671c61030000000000'),
  343185: b('cfd7b8848df772500c48dea6cca46bebf4e78647e41e520c35a6010000000000'),
  352940: b('78bcf813dbc450eb8ae40ec3e3837c330adc36783636d5a3f3c3000000000000'),
  382320: b('5a49a0c0811df83c0229be831d980279b123a88ebc1b7aef0b21010000000000'),
  401465: b('868c258e66cfd7f3aa0efa5de4ec2732a5f696075e468b422be1000000000000'),
  420000: b('9d5a031151c56a3f17c26385bf539cbbaa8685457f1ea2bcab90000000000000'),
  440000: b('252a3936bab9293686f0f746797f44693b41693b22f30fb7e5b1000000000000'),
  450000: b('1f26624d8dcb4e870162b9fb60ab6bf19d27012aefba07b7e9a7000000000000'),
  460000: b('e989708eae867eef2a210262131109f012b8eb064ce645151b57000000000000'),
  470000: b('4c084d79ad482cecca6c68e696102fba837426407e6d6f9aef41000000000000'),
  480000: b('bc7ad617b507df37ab74e05c2416a7ae467847ca91f75a94a0f2000000000000'),
  490000: b('03e432f763b741363f95c8d9d25ae948502f64edea6a6bf7cfa7000000000000'),
  500000: b('8189e97556091baeee60a7bfbd29da9027e21a494cefd4f32acd000000000000'),
  510000: b('9a35c2e547db366bedbb971e2764b86f09aae0858bfb496aa2ae000000000000'),
  525000: b('c8293632949c543ef969b89485875432eb5145dabcdb489ab0fd000000000000')
};

/**
 * Last checkpoint height.
 * @const {Number}
 * @default
 */

main.lastCheckpoint = 525000;

/**
 * @const {Number}
 * @default
 */

main.halvingInterval = 210000;

/**
 * Genesis block header.
 * @const {Object}
 */

main.genesis = {
  version: 4,
  hash: b('90df89e3eac846dab66eef70080030077a7e9e9dbe27e6fff2c24b446b000000'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('28ff00a867739a352523808d301f504bc4547699398d70faf2266a8bae5f3516'),
  time: 1514999494,
  bits: "1e00ffff",
  nonce: 25023712,
  height: 0
};

/**
 * The network's genesis block in a hex string.
 * @const {String}
 */

main.genesisBlock =
  '0400000000000000000000000000000000000000000000000000000000000000000000'
+ '0016355fae8b6a26f2fa708d39997654c44b501f308d802325359a7367a800ff28c60e'
+ '4d5affff001ee0d47d0101010000000100000000000000000000000000000000000000'
+ '00000000000000000000000000ffffffff570004ffff001d01044c4d5468652054696d'
+ '65732030332f4a616e2f3230313820426974636f696e206973206e616d65206f662074'
+ '68652067616d6520666f72206e65772067656e65726174696f6e206f66206669726d73'
+ 'ffffffff010088526a74000000434104678afdb0fe5548271967f1a67130b7105cd6a8'
+ '28e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b'
+ '8d578a4c702b6bf11d5fac00000000';

/**
 * POW-related constants.
 * @enum {Number}
 * @default
 */

main.pow = {
  /**
   * Default target.
   * @const {BN}
   */

  limit: new BN(
    '00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),

  /**
   * Compact pow limit.
   * @const {Number}
   * @default
   */

  bits: 486604799,

  /**
   * Minimum chainwork for best chain.
   * @const {BN}
   */

  chainwork: new BN(
    '00000000000000000000000000000000000000000259c9b7d8c7779d29a1188f',
    'hex'
  ),

  /**
   * Desired retarget period in seconds.
   * @const {Number}
   * @default
   */

  targetTimespan: 14 * 24 * 60 * 60,

  /**
   * Average block time.
   * @const {Number}
   * @default
   */

  targetSpacing: 60,

  /**
   * Retarget interval in blocks.
   * @const {Number}
   * @default
   */

  retargetInterval: 1,

  /**
   * Whether to reset target if a block
   * has not been mined recently.
   * @const {Boolean}
   * @default
   */

  targetReset: false,

  /**
   * Do not allow retargetting.
   * @const {Boolean}
   * @default
   */

  noRetargeting: false
};

/**
 * Block constants.
 * @enum {Number}
 * @default
 */

main.block = {
  /**
   * Height at which bip34 was activated.
   * Used for avoiding bip30 checks.
   */

  bip34height: 0,

  /**
   * Hash of the block that activated bip34.
   */

  bip34hash:
    b('90df89e3eac846dab66eef70080030077a7e9e9dbe27e6fff2c24b446b000000'),

  /**
   * Height at which bip65 was activated.
   */

  bip65height: 0,

  /**
   * Hash of the block that activated bip65.
   */

  bip65hash:
    b('90df89e3eac846dab66eef70080030077a7e9e9dbe27e6fff2c24b446b000000'),

  /**
   * Height at which bip66 was activated.
   */

  bip66height: 0,

  /**
   * Hash of the block that activated bip66.
   */

  bip66hash:
    b('90df89e3eac846dab66eef70080030077a7e9e9dbe27e6fff2c24b446b000000'),

  /**
   * Safe height to start pruning.
   */

  pruneAfterHeight: 1000,

  /**
   * Safe number of blocks to keep.
   */

  keepBlocks: 288,

  /**
   * Age used for the time delta to
   * determine whether the chain is synced.
   */

  maxTipAge: 24 * 60 * 60,

  /**
   * Height at which block processing is
   * slow enough that we can output
   * logs without spamming.
   */

  slowHeight: 325000
};

/**
 * Map of historical blocks which create duplicate transactions hashes.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki
 * @const {Object}
 * @default
 */

main.bip30 = {
};

/**
 * For versionbits.
 * @const {Number}
 * @default
 */

main.activationThreshold = 1916; // 95% of 2016

/**
 * Confirmation window for versionbits.
 * @const {Number}
 * @default
 */

main.minerWindow = 1; // nPowTargetTimespan / nPowTargetSpacing

/**
 * Deployments for versionbits.
 * @const {Object}
 * @default
 */

main.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1462060800, // May 1st, 2016
    timeout: 1493596800, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1479168000, // November 15th, 2016.
    timeout: 1510704000, // November 15th, 2017.
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 1496275200, // June 1st, 2017.
    timeout: 1510704000, // November 15th, 2017.
    threshold: 269, // 80%
    window: 336, // ~2.33 days
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

/**
 * Deployments for versionbits (array form, sorted).
 * @const {Array}
 * @default
 */

main.deploys = [
  main.deployments.csv,
  main.deployments.segwit,
  main.deployments.segsignal,
  main.deployments.testdummy
];

/**
 * Key prefixes.
 * @enum {Number}
 * @default
 */

main.keyPrefix = {
  privkey: 0x80,
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  xpubkey58: 'xpub',
  xprivkey58: 'xprv',
  coinType: 0
};

/**
 * {@link Address} prefixes.
 * @enum {Number}
 */

main.addressPrefix = {
  pubkeyhash: 0x3c,
  scripthash: 0x7a,
  witnesspubkeyhash: 0x06,
  witnessscripthash: 0x0a,
  bech32: 'bc'
};

/**
 * Default value for whether the mempool
 * accepts non-standard transactions.
 * @const {Boolean}
 * @default
 */

main.requireStandard = true;

/**
 * Default http port.
 * @const {Number}
 * @default
 */

main.rpcPort = 8766;

/**
 * Default wallet port.
 * @const {Number}
 * @default
 */

main.walletPort = 8767;

/**
 * Default min relay rate.
 * @const {Rate}
 * @default
 */

main.minRelay = 1000;

/**
 * Default normal relay rate.
 * @const {Rate}
 * @default
 */

main.feeRate = 100000;

/**
 * Maximum normal relay rate.
 * @const {Rate}
 * @default
 */

main.maxFeeRate = 400000;

/**
 * Whether to allow self-connection.
 * @const {Boolean}
 */

main.selfConnect = false;

/**
 * Whether to request mempool on sync.
 * @const {Boolean}
 */

main.requestMempool = false;

/*
 * Testnet (v3)
 * https://en.bitcoin.it/wiki/Testnet
 */

const testnet = {};

testnet.type = 'testnet';

testnet.seeds = [
  ''
];

testnet.magic = 0x544e5652;

testnet.port = 18767;

testnet.checkpointMap = {
  546: b('70cb6af7ebbcb1315d3414029c556c55f3e2fc353c4c9063a76c932a00000000'),
  10000: b('02a1b43f52591e53b660069173ac83b675798e12599dbb0442b7580000000000'),
  50000: b('0c6ceabe803cec55ba2831e445956d0a43ba9521743a802cddac7e0700000000'),
  90000: b('cafc21e17faf90461a5905aa03302c394912651ed9475ae711723e0d00000000'),
  100000: b('1e0a16bbadccde1d80c66597b1939e45f91b570d29f95fc158299e0000000000'),
  140000: b('92c0877b54c556889b72175ccbe0c91a1208f6ef7efb2c006101062300000000'),
  170000: b('508125560d202b89757889bb0e49c712477be20440058f05db4f0e0000000000'),
  210000: b('32365454b5f29a826bff8ad9b0448cad0072fc73d50e482d91a3dece00000000'),
  230000: b('b11a447e62643e0b27406eb0fc270cb8126d7b5b70822fb642d9513400000000'),
  270000: b('1c42b811cf9c163932f6e95ec55bf9b5e2cb5324e7e93001572e000000000000'),
  300000: b('a141bf3972424853f04367b47995e220e0b5a2706e5618766f22000000000000'),
  340000: b('67edd4d92e405608109164b15f92b193377d49325b0ed036739c010000000000'),
  350000: b('592b44bc0f7a4286cf07ead8497114c6952c1c7dea7305193deacf8e00000000'),
  390000: b('f217e183484fb6d695609cc71fa2ae24c3020943407e0150b298030000000000'),
  420000: b('de9e73a3b91fbb014e036e8583a17d6b638a699aeb2de8573d12580800000000'),
  460000: b('2e8baaffc107f15c87aebe01664b63d07476afa53bcbada1281a030000000000'),
  500000: b('06f60922a2aab2757317820fc6ffaf6a470e2cbb0f63a2aac0a7010000000000'),
  540000: b('8dd0bebfbc4878f5af09d3e848dcc57827d2c1cebea8ec5d8cbe420500000000'),
  570000: b('87acbd4cd3c40ec9bd648f8698ed226b31187274c06cc7a9af79030000000000'),
  600000: b('169a05b3bb04b7d13ad628915630900a5ed2e89f3a9dc6064f62000000000000'),
  630000: b('bbbe117035432a6a4effcb297207a02b031735b43e0d19a9217c000000000000'),
  670000: b('080bfe75caed8624fcfdfbc65973c8f962d7bdc495a891f5d16b7d0000000000'),
  700000: b('c14d3f6a1e7c7d66fd940951e44f3c3be1273bea4d2ab1786140000000000000'),
  740000: b('b3b423f0462fd78a01e4f1a59a2737a0525b5dbb9bba0b4634f9000000000000'),
  780000: b('0381582e34c3755964dc2813e2b33e521e5596367144e1670851050000000000'),
  800000: b('03b5f8ab257e02903f509f5ff2935220eec2e77b1819651d099b200000000000'),
  840000: b('dac1648107bd4394e57e4083c86d42b548b1cfb119665f179ea80a0000000000'),
  880000: b('ff90b4bb07eded8e96715bf595c09c7d21dd8c61b8306ff48705d60000000000'),
  900000: b('9bd8ac418beeb1a2cf5d68c8b5c6ebaa947a5b766e5524898d6f350000000000'),
  940000: b('c98f1651a475b00d12f8c25eb166ee843affaa90610e36a19d68030000000000'),
  980000: b('cc8e9774542d044a9698ca2336ae02d5987157e676f1c76aa3877c0000000000'),
  1010000:
    b('9d9fb11abc2712d80368229e97b8d827b2a07d27eb5335e5c924000000000000'),
  1050000: b('d8190cf0af7f08e179cab51d67db0b44b87951a78f7fdc31b4a01a0000000000')
};

testnet.lastCheckpoint = 1050000;

testnet.halvingInterval = 210000;

testnet.genesis = {
  version: 1,
  hash: b('43497fd7f826957108f4a30fd9cec3aeba79972084e90ead01ea330900000000'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1296688602,
  bits: 486604799,
  nonce: 414098458,
  height: 0
};

testnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff001d1aa4ae1801010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

testnet.pow = {
  limit: new BN(
    '00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 486604799,
  chainwork: new BN(
    '000000000000000000000000000000000000000000000062b7123cfd7d09f7b6',
    'hex'
  ),
  targetTimespan: 14 * 24 * 60 * 60,
  targetSpacing: 10 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

testnet.block = {
  bip34height: 21111,
  bip34hash:
    b('f88ecd9912d00d3f5c2a8e0f50417d3e415c75b3abe584346da9b32300000000'),
  bip65height: 581885,
  bip65hash:
    b('b61e864fbec41dfaf09da05d1d76dc068b0dd82ee7982ff255667f0000000000'),
  bip66height: 330776,
  bip66hash:
    b('82a14b9e5ea81d4832b8e2cd3c2a6092b5a3853285a8995ec4c8042100000000'),
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 24 * 60 * 60,
  slowHeight: 950000
};

testnet.bip30 = {};

testnet.activationThreshold = 1512; // 75% for testchains

testnet.minerWindow = 2016; // nPowTargetTimespan / nPowTargetSpacing

testnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1456790400, // March 1st, 2016
    timeout: 1493596800, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1462060800, // May 1st 2016
    timeout: 1493596800, // May 1st 2017
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

testnet.deploys = [
  testnet.deployments.csv,
  testnet.deployments.segwit,
  testnet.deployments.segsignal,
  testnet.deployments.testdummy
];

testnet.keyPrefix = {
  privkey: 0xef,
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  xpubkey58: 'tpub',
  xprivkey58: 'tprv',
  coinType: 1
};

testnet.addressPrefix = {
  pubkeyhash: 0x6f,
  scripthash: 0xc4,
  witnesspubkeyhash: 0x03,
  witnessscripthash: 0x28,
  bech32: 'tb'
};

testnet.requireStandard = false;

testnet.rpcPort = 18766;

testnet.walletPort = 1676;

testnet.minRelay = 1000;

testnet.feeRate = 20000;

testnet.maxFeeRate = 60000;

testnet.selfConnect = false;

testnet.requestMempool = false;

/*
 * Regtest
 */

const regtest = {};

regtest.type = 'regtest';

regtest.seeds = [
  '127.0.0.1'
];

regtest.magic = 0xdab5bffa;

regtest.port = 48444;

regtest.checkpointMap = {};
regtest.lastCheckpoint = 0;

regtest.halvingInterval = 150;

regtest.genesis = {
  version: 1,
  hash: b('06226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1296688602,
  bits: 545259519,
  nonce: 2,
  height: 0
};

regtest.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

regtest.pow = {
  limit: new BN(
    '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  targetTimespan: 14 * 24 * 60 * 60,
  targetSpacing: 10 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: true
};

regtest.block = {
  bip34height: 100000000,
  bip34hash: null,
  bip65height: 1351,
  bip65hash: null,
  bip66height: 1251,
  bip66hash: null,
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

regtest.bip30 = {};

regtest.activationThreshold = 108; // 75% for testchains

regtest.minerWindow = 144; // Faster than normal for regtest

regtest.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

regtest.deploys = [
  regtest.deployments.csv,
  regtest.deployments.segwit,
  regtest.deployments.segsignal,
  regtest.deployments.testdummy
];

regtest.keyPrefix = {
  privkey: 0x5a,
  xpubkey: 0xeab4fa05,
  xprivkey: 0xeab404c7,
  xpubkey58: 'rpub',
  xprivkey58: 'rprv',
  coinType: 1
};

regtest.addressPrefix = {
  pubkeyhash: 0x3c,
  scripthash: 0x26,
  witnesspubkeyhash: 0x7a,
  witnessscripthash: 0x14,
  bech32: 'rb'
};

regtest.requireStandard = false;

regtest.rpcPort = 48766;

regtest.walletPort = 48767;

regtest.minRelay = 1000;

regtest.feeRate = 20000;

regtest.maxFeeRate = 60000;

regtest.selfConnect = true;

regtest.requestMempool = true;

/*
 * Simnet (rvnd)
 */

const simnet = {};

simnet.type = 'simnet';

simnet.seeds = [
  '127.0.0.1'
];

simnet.magic = 0x12141c16;

simnet.port = 18555;

simnet.checkpointMap = {};

simnet.lastCheckpoint = 0;

simnet.halvingInterval = 210000;

simnet.genesis = {
  version: 1,
  hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1401292357,
  bits: 545259519,
  nonce: 2,
  height: 0
};

simnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a4506'
  + '8653ffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

simnet.pow = {
  limit: new BN(
    // High target of 0x207fffff (545259519)
    '7fffff0000000000000000000000000000000000000000000000000000000000',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  targetTimespan: 14 * 24 * 60 * 60,
  targetSpacing: 10 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

simnet.block = {
  bip34height: 0,
  bip34hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  bip65height: 0,
  bip65hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  bip66height: 0,
  bip66hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

simnet.bip30 = {};

simnet.activationThreshold = 75; // 75% for testchains

simnet.minerWindow = 100; // nPowTargetTimespan / nPowTargetSpacing

simnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0, // March 1st, 2016
    timeout: 0xffffffff, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0, // May 1st 2016
    timeout: 0xffffffff, // May 1st 2017
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

simnet.deploys = [
  simnet.deployments.csv,
  simnet.deployments.segwit,
  simnet.deployments.segsignal,
  simnet.deployments.testdummy
];

simnet.keyPrefix = {
  privkey: 0x64,
  xpubkey: 0x0420bd3a,
  xprivkey: 0x0420b900,
  xpubkey58: 'spub',
  xprivkey58: 'sprv',
  coinType: 115
};

simnet.addressPrefix = {
  pubkeyhash: 0x3f,
  scripthash: 0x7b,
  witnesspubkeyhash: 0x19,
  witnessscripthash: 0x28,
  bech32: 'sb'
};

simnet.requireStandard = false;

simnet.rpcPort = 18556;

simnet.walletPort = 18558;

simnet.minRelay = 1000;

simnet.feeRate = 20000;

simnet.maxFeeRate = 60000;

simnet.selfConnect = false;

simnet.requestMempool = false;

/*
 * Expose
 */

network.main = main;
network.testnet = testnet;
network.regtest = regtest;
network.simnet = simnet;
