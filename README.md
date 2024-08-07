# 📦 Stability Integration Library

![GitHub package.json version](https://img.shields.io/github/package-json/v/stabilitydao/stability)
![NPM Version](https://img.shields.io/npm/v/%40stabilitydao%2Fstability?label=NPM%20version)
![GitHub Tag](https://img.shields.io/github/v/tag/stabilitydao/stability)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/stabilitydao/stability?label=code%20size)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40stabilitydao%2Fstability?label=NPM%20bundle%20size)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/%40stabilitydao%2Fstability?label=NPM%20unpacked%20size)

[![codecov](https://codecov.io/github/stabilitydao/stability/graph/badge.svg?token=V0JV1WOGMM)](https://codecov.io/github/stabilitydao/stability)

This is library for integrating Stability Platform into Node.js applications.

## 🔌 Usage

Add npm package to your project:

```shell
yarn add @stabilitydao/stability
```

### #️⃣ Deployments

Core contracts deployment addresses and subgraph API endpoints.

```typescript
import {deployments} from "@stabilitydao/stability";
console.log('Platform address on Polygon', deployments["137"].core.platform)
```

#### Types

```typescript
type Deployment = {
  core: {
    platform: `0x${string}`,
    factory: `0x${string}`,
    priceReader: `0x${string}`,
    swapper: `0x${string}`,
    hardWorker: `0x${string}`,
    vaultManager: `0x${string}`,
    strategyLogic: `0x${string}`,
    zap: `0x${string}`,
  },
  subgraph: string,
}
```

#### Constants

* `deployments: {[chainId:string]:Deployment}`

### ⛓️ Networks

Blockchains known to the platform and their integration statuses.

#### Types

```typescript
type Network = {
  id: NetworkId,
  chainId: number | string,
  status: NetworkStatus,
}
```

#### Enums

* `const enum NetworkId`
* `const enum NetworkStatus`

#### Constants

* `networks: { [chainId: string]: Network }`

#### Methods

* `getSupportedNetworkIds(): NetworkId[]`
* `getNetworksTotals(): {[status in NetworkStatus]: number}`

### 💲 Strategies

Comprehensive information about platform strategies for managing DeFi assets. Includes developed strategies and those currently in development or awaiting development.

#### Types

```typescript
type Strategy = {
  id: string
  shortId: StrategyShortId
  state: StrategyState
  contractGithubId: number
  color: string
  bgColor: string
}
```

#### Enums

* `const enum StrategyShortId`
* `enum StrategyState`

#### Constants

* `strategies: {[shortId in StrategyShortId]:Strategy}`
* `strategyStateDescription: {[state in StrategyState]: string}`

#### Methods

* `getMerklStrategies()`
* `getStrategyShortId(id: string): StrategyShortId|undefined`
* `getStrategiesTotals(): {[state in StrategyState]: number}`

### 🌐 Integrations

DeFi organizations, protocols, their integration statuses, usage and other information.

#### Types

```typescript
type DeFiOrganization = {
  name: string
  website: string
  protocols: { [protocolId: string]: DeFiProtocol }
  defiLlama: string
  github?: string
}

type DeFiProtocol = {
  name: string
  category: DefiCategory
  networks: NetworkId[],
  strategies?: StrategyShortId[]
  intermediaryStrategies?: StrategyShortId[]
  adapters?: string[]
  coreContracts?: string[]
}
```

#### Enums

* `const enum IntegrationStatus`
* `enum DefiCategory`

#### Constants

* `integrations: { [org: string]: DeFiOrganization }`

#### Methods

* `getIntegrationStatus(p: DeFiProtocol): IntegrationStatus`

### 📌 Addresses

Third-party addresses.

```typescript
import {almFactories} from '@stabilitydao/stability'
```

### 🪙 Assets

Asset addresses, description, website, color.

#### Types

```typescript
type Asset = {
  addresses: {[chainId:string]: `0x${string}`|`0x${string}`[]},
  symbol: string,
  description: string,
  website: string,
  color: string,
}
```

#### Constants

* `assets: Asset[]`

#### Methods

* `getAsset(chainId: string, tokenAddress: 0x${string}): Asset|undefined`

### 📜 Tokenlist

```typescript
import {tokenlist} from '@stabilitydao/stability'
```

### 📒 API types

```typescript
type ApiMainReply = {
  title: string;
  about: string;
  status: string;
  services: string[];
  platforms: Platforms;
  vaults: Vaults;
  underlyings: Underlyings;
  assetPrices: AssetPrices;
  error?: string;
}
```
...

## 👷 Develop

```shell
yarn overview
yarn overview-full
yarn test
yarn coverage
```
