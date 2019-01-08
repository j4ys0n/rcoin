'use strict';

const rcoin = require('../..');

const key = rcoin.wallet.WalletKey.generate('regtest');

const workers = new rcoin.WorkerPool({
  enabled: true
});

const chain = new rcoin.Chain({
  network: 'regtest',
  workers: workers
});

const miner = new rcoin.Miner({
  chain: chain,
  addresses: [key.getAddress()],
  coinbaseFlags: 'my-miner',
  workers: workers
});

(async () => {
  await miner.open();

  const tmpl = await miner.createBlock();

  console.log('Block template:');
  console.log(tmpl);

  const job = await miner.createJob();
  const block = await job.mineAsync();

  console.log('Mined block:');
  console.log(block);
  console.log(block.txs[0]);

  await chain.add(block);

  console.log('New tip:');
  console.log(chain.tip);
})().catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
