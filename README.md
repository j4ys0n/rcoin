# Rcoin

__NOTE__: The latest release of rcoin contains a non-backward compatible change
to the rest API. Please read the [changelog]'s "migrating" section for more
details.

---

**Rcoin** is an alternative implementation of the ravencoin protocol, written in
node.js.

## Uses

- Full Node
- SPV Node
- Wallet Backend (bip44 derivation)
- Mining Backend (getblocktemplate support)
- Layer 2 Backend (lightning)
- General Purpose Ravencoin Library

Try it in the browser: [http://rcoin.ravencoin.online/browser/](http://rcoin.ravencoin.online/browser/)

## Install

```
$ git clone git://github.com/raven-community/rcoin.git
$ cd rcoin
$ npm install
$ ./bin/rcoin
```

See the [Beginner's Guide][guide] for more in-depth installation instructions.

## Documentation

- API Docs: https://rcoin.ravencoin.online/docs/
- REST Docs: https://rcoin.ravencoin.online/api-docs/
- Docs: [docs/](docs/README.md)

## Disclaimer

Rcoin does not guarantee you against theft or lost funds due to bugs, mishaps,
or your own incompetence. You and you alone are responsible for securing your
money.

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your code
to be distributed under the MIT license. You are also implicitly verifying that
all code is your original work. `</legalese>`

## License

- Copyright (c) 2019 MSFTserver
- Copyright (c) 2014-2015, Fedor Indutny (MIT License).
- Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).

See LICENSE for more info.

[guide]: https://github.com/raven-community/rcoin/blob/master/docs/Beginner's-Guide.md
[changelog]: https://github.com/raven-community/rcoin/blob/master/CHANGELOG.md
