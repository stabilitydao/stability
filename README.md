# 📦 Stability Integration Library

![GitHub package.json version](https://img.shields.io/github/package-json/v/stabilitydao/stability/main)
![GitHub package.json version](https://img.shields.io/github/package-json/v/stabilitydao/stability/dev)
![NPM Version](https://img.shields.io/npm/v/%40stabilitydao%2Fstability?label=NPM%20version)
![GitHub Tag](https://img.shields.io/github/v/tag/stabilitydao/stability)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/stabilitydao/stability?label=code%20size)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40stabilitydao%2Fstability?label=NPM%20bundle%20size)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40stabilitydao%2Fstability?label=NPM%20unpacked%20size)

[![codecov](https://codecov.io/github/stabilitydao/stability/graph/badge.svg?token=V0JV1WOGMM)](https://codecov.io/github/stabilitydao/stability)

This is library for integrating Stability Platform into Node.js applications.

![](chains.png)
![](integrations.png)

## 🔌 Usage

Add npm package to your js/ts project:

```shell
yarn add @stabilitydao/stability
```

## 👷 Develop

### How to

```shell
yarn overview
yarn overview-full
yarn draw-chains
yarn draw-integrations
yarn contests-maker
yarn test
yarn coverage
yarn prettier . --check
yarn prettier . --write
```

### Branch structure

| Branch        | Description                            |
| ------------- | -------------------------------------- |
| main          | Production. Accepts only PRs from dev. |
| dev           | Accumulator of changes for the release |
| developer-dev | Developer's changes                    |

### Commit/PR prefix

| Changes            | Prefix |
|--------------------| ------ |
| API types          | 📡     |
| AI, Agents         | 🤖     |
| Strategies         | 💲     |
| Deployments        | #️⃣     |
| Chains             | ⛓️     |
| Integrations       | 🌐     |
| Assets, tokenlist  | 🪙     |
| Sync state, etc    | ♻️️    |
| Content generators | 🎇     |
| Bridges            | 🌉     |
| Risk               | 🚦     |
| Prettier           | #️⃣     |
| Docs               | 📙     |
| Adapters           | 🔌     |
| Contests           | 🏆     |
| Lending            | 🏦     |
| Collector          | 📦     |
