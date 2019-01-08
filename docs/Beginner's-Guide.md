## Introduction

Rcoin is an _alternative_ implementation of the ravencoin protocol, written in node.js. It is a full node which can be used for full blockchain validation and is aware of all known consensus rules.

## Requirements

- Linux, OSX, or Windows (\*) (\*\*)
- node.js >=v8.14.0
- npm >=v6.4.1
- python2 (for node-gyp)
- gcc/g++ (for leveldb and secp256k1)
- git (optional, see below)

(\*): Note that rcoin works best with unix-like OSes, and has not yet been thoroughly tested on windows.

(\*\*): The BSDs and Solaris have also not been tested yet, but should work in theory.

## Build & Install

Rcoin is meant to be installed via git for security purposes, as there are security issues when installing via npm. All tagged commits for release should be signed by @chjj's [PGP key][keybase] (`B4B1F62DBAC084E333F3A04A8962AB9DE6666BBD`). Signed copies of node.js are available from [nodejs.org][node], or from your respective OS's package repositories.

### Installing via Git

``` bash
$ curl https://keybase.io/chjj/pgp_keys.asc | gpg --import
$ git clone git://github.com/rcoin-org/rcoin.git
$ cd rcoin
```

For a specific release:
```
$ git tag
$ git tag -v <version> # verify signature
$ git checkout <version>
```

Install dependencies:
```
$ npm install
$ npm install -g # link globally
```
**Note:** Dependencies are checked for integrity using `package-lock.json`. However `npm` _will not_ make these checks with `npm install -g` and it will link your installation globally so that `rcoin` is in your path _(e.g. $ rcoin)_.

### Installing via Docker

Check [rcoin-docker](https://github.com/raven-community/rcoin-docker)

### Installing on Windows

Install OpenSSL v1.0.2L 64-Bit:

https://slproweb.com/download/Win64OpenSSL-1_0_2L.exe

As Administrator, open `cmd.exe` and run:

```console
C:\Users\rcoin\rcoin>npm install --global --production windows-build-tools
```

to install `VCBuild.exe` and `Python 2.7.x` both required by `node-gyp`
for building native modules.

Then continue [Installing via Git](#installing-via-git)

Note that you need a shell that supports bash scripts, like Git Bash to launch
rcoin.

### Troubleshooting

If the build fails compilation for `rcoin-native` or `secp256k1-node` __validation will be slow__ (a block verification which should take 1 second on consumer grade hardware may take up to 15 seconds). Rcoin will throw a warning on boot if it detects a build failure. If you run into this issue, please post an issue on the repo.

## Starting up your first rcoin node

If rcoin is installed globally, `$ rcoin` should be in your PATH. If not, the rcoin bootstrap script resides in `/path/to/rcoin/bin/rcoin`.

``` bash
$ rcoin
```

Will run a rcoin node as the foreground process, displaying all debug logs.

To run as a daemon:

``` bash
$ rcoin --daemon
```

This will start up a full node, complete with: a blockchain, mempool, miner, p2p server, wallet server, and an HTTP REST+RPC server.

All logs will be written to `~/.rcoin/debug.log` by default.

By default, the http server will only listen on `127.0.0.1:8766`. No auth will be required if an API key was not passed in. If you listen on any other host, auth will be required and an API key will be auto-generated if one was not passed in.

## Listening Externally

To listen publicly on the HTTP server, `--http-host=0.0.0.0` (ipv4) or `--http-host=::` (ipv4 and ipv6) can be passed. Additionally this: `--http-port=1337` can set the port.

To advertise your node on the P2P network `--public-host=[your-public-ip]` and `--public-port=[your-public-port]` may be passed.

## Using an API Key

If listening publicly on the HTTP server, an API key is required. One will be generated and reported in the logs automatically if no key was chosen. An api key can be chosen with the `--api-key` option.

Example:

``` bash
$ rcoin --http-host=0.0.0.0 --api-key hunter2 --daemon
```

API keys are used with HTTP Basic Auth:

``` bash
$ curl http://x:hunter2@localhost:8766/
```

Rcoin CLI is the prepackaged tool for hitting both the REST and RPC api.

``` bash
$ rcoin cli info --api-key hunter2
$ rcoin rpc getblockchaininfo --api-key hunter2
```

## Using Tor/SOCKS

Rcoin has native support for SOCKS proxies, and will accept a `--proxy` option in the format of `--proxy=[user]:[pass]@host:port`.

Passing the `--onion` option tells rcoin that the SOCKS proxy is a Tor socks proxy, and will enable Tor resolution for DNS lookups, as well as try to connect to `.onion` addresses found on the P2P network.

``` bash
$ rcoin --proxy joe:hunter2@127.0.0.1:9050 --onion
```

### Running rcoin as a tor hidden service

Your hidden service must first be configured with `tor`. Once you have the `.onion` address, it can be passed into `--public-host` in the form of `--public-host foo.onion`.

## Target Nodes

It's often desirable to run behind several trusted ravencoin nodes. To select permanent nodes to connect to, the `--nodes` option is available:

``` bash
$ rcoin --nodes foo.example.com:8767,1.2.3.4:8767,5.6.7.8:8767
```

If chosen, rcoin will _always_ try to connect to these nodes as outbound peers. They are top priority and whitelisted (not susceptible to permanent bans, only disconnections).

To _only_ connect to these nodes. `--max-outbound` could be set to 3:

``` bash
$ rcoin --nodes foo.example.com,1.2.3.4,5.6.7.8 --max-outbound 3
```

## Disabling Listening

To avoid accepting connections on the P2P network altogether, `--listen=false` can be passed to rcoin.

### Selfish Mode

Rcoin also supports a "selfish" mode. In this mode, rcoin still has full blockchain and mempool validation, but network services are disabled: it will not relay transactions or serve blocks to anyone.

``` bash
$ rcoin --selfish --listen=false
```

Note: Selfish mode is not recommended. We encourage you to _help_ the network by relaying transactions and blocks. At the same time, selfish mode does have its uses if you do not have the bandwidth to spare, or if you're absolutely worried about potential DoS attacks.

## Further Configuration

See [Configuration][configuration].

[keybase]: https://keybase.io/chjj#show-public
[node]: https://nodejs.org/dist/v7.5.0/
[configuration]: Configuration.md
