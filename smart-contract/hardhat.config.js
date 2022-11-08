require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/f-m1Dy9FhJ1e3A3HFXmsUYuGSIkDnytb",
      accounts: [`${process.env.P_KEY}`],
    },
  },
};
