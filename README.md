# Stability Integration Library

[![GitHub version](https://badge.fury.io/gh/stabilitydao%2Fstability.svg)](https://badge.fury.io/gh/stabilitydao%2Fstability)
[![npm version](https://badge.fury.io/js/@stabilitydao%2Fstability.svg)](https://badge.fury.io/js/@stabilitydao%2Fstability)
[![codecov](https://codecov.io/github/stabilitydao/stability/graph/badge.svg?token=V0JV1WOGMM)](https://codecov.io/github/stabilitydao/stability)

This is library for integrating the platform into Node.js applications.

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

`stability.tokenlist.json`

### API types

```typescript
import type {ApiMainReply, ApiAggSwapData} from '@stabilitydao/stability'
```

### Subgraphs

The Graph API query URLs for supported networks.

## Develop

```shell
yarn overview
yarn overview-full
yarn test
yarn coverage
```
