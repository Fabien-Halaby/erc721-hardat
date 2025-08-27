const hre = require("hardhat");

async function main() {
    //! Find and deploy a contract named "NFTee"
    const nftContract = await hre.ethers.deployContract("NFTee");

    //! Wait for the contract to finish deploying
    await nftContract.waitForDeployment();

    //! Print the address of the deployed contract
    console.log("NFT Contract Address: ", nftContract.target);
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })