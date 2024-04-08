# Charity Fund Smart Contract

[Russian version](README.ru.md)

## Technology Stack

- Ethereum Blockchain
- Solidity (smart contract language)
- Ganache (local blockchain simulator)
- Truffle (development environment and testing framework)
- Node.js (recommended version: 18)

## Overview

This smart contract is designed to streamline the process of gathering funds for charitable causes. It enables the creation of specific funding goals with designated beneficiaries (e.g., charity organizations). Users can contribute to these goals, and once the target amount is collected, the funds are automatically forwarded to the intended recipient. A distinctive feature of this contract is the option for contributors to specify what happens with any excess funds (funds exceeding the goal); they can choose to have these returned or donated to the charity.

### Advantages

- Transparency and Trust: Every transaction is recorded on the blockchain, providing a transparent trail of where the money goes, increasing trust among contributors.
- Automatic Distribution: The need for manual processing is eliminated as the contract automatically transfers the collected funds upon reaching the set goal.
- Flexibility in Donations: Contributors have control over their donations, especially regarding any excess amount, offering them a choice between a refund or additional support for the charity.
- Efficiency: Reducing administrative overheads associated with traditional fundraising methods.

## Developer Information

### Prerequisites

Ensure you have the following installed:

- Node.js (Version 18 is recommended for optimal compatibility)
- Truffle
- Ganache

### Project Setup

Clone the repository and navigate to the project root. Then, install the necessary dependencies:

npm install

### Compiling the Smart Contract

Use the following make command to compile the smart contract:

make build

This command runs truffle compile which compiles the contract and prepares it for deployment.

### Deploying the Contract

To deploy the smart contract to your local Ganache blockchain, use:

make migrate

This command performs a migration using Truffle, resetting any previous deployments if necessary.

### Running a Script

To execute a custom script (e.g., index.js) within the Truffle environment against your local blockchain, run:

make run

This is useful for script-based interactions with your deployed contract, such as automated testing or administrative tasks.

### Further Development

To expand this project or integrate it into a dApp (decentralized application), develop your frontend application to interact with the deployed smart contract. Web3.js or Ethers.js libraries can be used for this purpose, enabling your application to communicate with the Ethereum blockchain.

Remember, when developing with blockchain and smart contracts, always test thoroughly on test networks before considering deploying to the main net, to ensure the security and reliability of your contract.
