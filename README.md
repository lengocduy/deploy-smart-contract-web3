# Deploy a contract using web3.js

Create a simple smart contract and use the Web3 JavaScript library to compile and then deploy the smart contract base on [Infura](https://docs.infura.io/infura/networks/ethereum/tutorials/transactions/deploy-a-contract-using-web3.js) that

- Provides world-class infrastructure for developers to ensure their decentralized application scales to meet user demand. 
- Focuses on making blockchain development a simple, cohesive experience with all of your tools in one place: Ethereum Nodes, Eth2 Nodes, Transaction Relaying, Layer 2 Networks, IPFS, and Filecoin.

## Prerequisites

- An Etherem project on Infura
- Node.js installed
- An Ethereum account for testing purposes that has sufficient balance ETH
[Faucet for Ropsten network](https://imxfaucet.xyz/) | [mycrypto.com](https://support.mycrypto.com/how-to/getting-started/where-to-get-testnet-ether/)

### Install dependencies libraries

```bash
npm install
```

### Update environment variables in file `.env`

```bash
ETHEREUM_NETWORK = "ropsten"
INFURA_PROJECT_ID = "<Your-Project-ID>"
SIGNER_PRIVATE_KEY = "<Your-Private-Key>"
```

### Generate Application Binary Interfaces ABI file if you want to modifie (Optional)

```bash
node compile.js
```

### Deploy contract and get conract address

```bash
node deploy.js
```

### Update contract address in your `.env`

```bash
ETHEREUM_NETWORK = "ropsten"
INFURA_PROJECT_ID = "<Your-Project-ID>"
SIGNER_PRIVATE_KEY = "<Your-Private-Key>"
DEMO_CONTRACT = "<Contract_Address>"
```

### Execute a function in a smart contract

```bash
node call.js
```

### Execute the transaction

```bash
node sendTx.js
```

