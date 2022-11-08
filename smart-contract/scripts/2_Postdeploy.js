const hre = require("hardhat");

const main = async () => {
  const PostImageFactory = hre.ethers.getContractFactory("PostImageNfts");

  const PostImageContract = await PostImageFactory.deploy();

  await PostImageContract.deployed();
  console.log("post image minter deployed", PostImageContract.address);
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
