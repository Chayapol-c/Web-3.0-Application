require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
const privateKey = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/uGfHmebyUkiZjbQKgf0fbe89S9-o1p8x",
      accounts: [privateKey]
    }
  }
}