# Stability Integration Library

![GitHub package.json version](https://img.shields.io/github/package-json/v/stabilitydao/stability)
![NPM Version](https://img.shields.io/npm/v/%40stabilitydao%2Fstability?label=NPM%20version)
![GitHub Tag](https://img.shields.io/github/v/tag/stabilitydao/stability)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/stabilitydao/stability?label=code%20size)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40stabilitydao%2Fstability?label=NPM%20bundle%20size)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40stabilitydao%2Fstability?label=NPM%20unpacked%20size)

[![codecov](https://codecov.io/github/stabilitydao/stability/graph/badge.svg?token=V0JV1WOGMM)](https://codecov.io/github/stabilitydao/stability)

This is library for integrating Stability Platform into Node.js applications.

## Usage

Add npm package to your project:

```shell
yarn add @stabilitydao/stability
```

### Deployments

Core contracts deployment addresses.

```typescript
import {deployments} from "@stabilitydao/stability";
console.log('Platform address on Polygon', deployments["137"].platform)
```

### Strategies

Comprehensive information about platform strategies for managing DeFi assets. Includes developed strategies and those currently in development or awaiting development.

#### Methods

* `getMerklStrategies()`
* `getStrategyShortId(id: string): StrategyShortId|undefined`

### Networks

Blockchains known to the platform and their integration statuses.

### Integrations

DeFi organizations, protocols, their integration statuses, usage and other information.

#### Methods

* `getIntegrationStatus(p: DeFiProtocol): IntegrationStatus`

### Tokenlist

```typescript
import {tokenlist} from '@stabilitydao/stability'
```

### API types

```typescript
import type {ApiMainReply, ApiAggSwapData} from '@stabilitydao/stability'
```

### Subgraphs

The Graph API query URLs for supported networks.

### Addresses

Third-party addresses.

```typescript
import {almFactories} from '@stabilitydao/stability'
```

## Develop

```shell
yarn overview
yarn overview-full
yarn test
yarn coverage
```
