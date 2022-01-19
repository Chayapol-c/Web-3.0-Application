# Web 3.0 Application
This repository inspired by [JavaScript Mastery's youtube video](https://www.youtube.com/watch?v=Wn_Kb3MR_cU). The project is building using hardhat and React.
The contract is deployed at [ropsten](https://ropsten.etherscan.io/address/0x495d6a217169993ab0eef54a3bf5e9c44dc0076c) test network.

## Installation

for the local front-end install [Node.js](https://nodejs.org/en/) before running following command
```
cd client
npm install
```
running the web application then go to https://localhost:3000
```
npm run dev
```


## Features
- Connect wallet button will shown when your wallet is not connected
- When there're no crypto wallet extension installed. The alert message will show to install metamask.
- The gradient card will show the shorten current connected address.
- Fill the information in the form for sending the ETH.
- Address in the form is the destination address.
- Amount in the form is the amount that will send.
- Keyword in the form will generate the GIF file from [GIPHY API](https://developers.giphy.com/docs).
- Message in the form will recorded in the transaction.
- After press **"Send Now"** button, ETH will send to provided address. 
- Latest transaction show all transactions with their detail.

## What I have learn from this project
- using [hardhat](https://hardhat.org/) for developing a smart contract
- extend the tailwind theme (the **mf** screens class name)
- using [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) the basic react hook
- how to interact with metamask using [ethers.js](https://docs.ethers.io/v5/) library

## Thing that need to improve in this project
I found by accident that this code cannot fix which blockchain that is going to do the transaction. I can sending the 0.001 BNB when I connected it as BSC. So I will improve this later by add the dropdown for network selection and if the network is not match the selected metamask will ask you to changing the network before doing the transaction.