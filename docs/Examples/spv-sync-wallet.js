'use strict';

const rcoin = require('../..');

rcoin.set('testnet');

// SPV chains only store the chain headers.
const chain = new rcoin.Chain({
  memory: false,
  location: '/tmp/rcoin/spvchain',
  spv: true
});

const pool = new rcoin.Pool({
  chain: chain,
  spv: true,
  maxPeers: 8
});

const walletdb = new rcoin.wallet.WalletDB({ memory: true });

(async () => {
  await pool.open();
  await walletdb.open();

  const wallet = await walletdb.create();

  console.log('Created wallet with address %s', await wallet.receiveAddress());

  // Add our address to the spv filter.
  pool.watchAddress(await wallet.receiveAddress());

  // Connect, start retrieving and relaying txs
  await pool.connect();

  // Start the blockchain sync.
  pool.startSync();

  pool.on('tx', async (tx) => {
    console.log('received TX');

    await walletdb.addTX(tx);
    console.log('Transaction added to walletDB');
  });

  wallet.on('balance', (balance) => {
    console.log('Balance updated.');
    console.log(rcoin.amount.rvn(balance.unconfirmed));
  });
})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
