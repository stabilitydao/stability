# 📦 Stability Operating System Library

![GitHub package.json version](https://img.shields.io/github/package-json/v/stabilitydao/stability/main)
![GitHub package.json version](https://img.shields.io/github/package-json/v/stabilitydao/stability/dev)
![NPM Version](https://img.shields.io/npm/v/%40stabilitydao%2Fstability?label=NPM%20version)
![GitHub Tag](https://img.shields.io/github/v/tag/stabilitydao/stability)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/stabilitydao/stability?label=code%20size)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40stabilitydao%2Fstability?label=NPM%20bundle%20size)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40stabilitydao%2Fstability?label=NPM%20unpacked%20size)

[![codecov](https://codecov.io/github/stabilitydao/stability/graph/badge.svg?token=V0JV1WOGMM)](https://codecov.io/github/stabilitydao/stability)

This is library for integrating Stability OS into Node.js applications.

## 🔌 Usage

Add this package to your project:

```shell
yarn add @stabilitydao/stability
```

and use it

```javascript
import { daos } from "@stabilitydao/stability";
console.log(`Names of DAOs: ${daos.map((dao) => dao.name).join(", ")}`);
```

## 👷 Develop

### How to

```shell
yarn os
yarn test
yarn coverage
yarn prettier . --write
```

### Commit and PR prefix

- 📦 New version
- 📚 Knowledge (🪙 assets, 🌐 protocols, ⛓️ chains)
- 🔨 Types, refactor
- ♻️ Update data (DAOs, strats, integrations, etc)
- 🏛️ DAO
- 🧑‍🎓 Docs
- 📜 DeFi Strategies
- 📙 MEV Strategies
- ✨ Epic
- 🤖 Agents
- 📡 API
- 🏦 Lending
- 🧺 Products
- 🎇 Content generator
