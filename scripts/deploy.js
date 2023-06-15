// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // const election = await hre.ethers.deployContract("Election");

  // await election.waitForDeployment();

   // Deploy the Election contract
   const Election = await hre.ethers.getContractFactory("Election");
   const election = await Election.deploy();
 
   // Wait for the contract to be mined
   await election.deployTransaction.wait();
 
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
