
const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

   // Deploy the Election contract
    const Election = await hre.ethers.getContractFactory("Election");
    const election = await Election.deploy();

   // Wait for the contract to be mined
    await election.deployed();

   // Get the address of the deployed contract
    const electionAddress = election.address;

   // Log the address of the deployed contract to the console
    console.log(`Election contract deployed to address: ${electionAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// Account balance: 9999997257860520395232
// Election contract deployed to address: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
