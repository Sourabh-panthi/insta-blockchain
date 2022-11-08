const hre = require("hardhat");

const main = async () => {
  const ProfileImageFactory = hre.ethers.getContractFactory("ProfileImageNfts");

  const ProfileImageContract = await ProfileImageFactory.deploy();

  await ProfileImageContract.deployed();
  console.log("profile image minter deployed", ProfileImageContract.address);
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
