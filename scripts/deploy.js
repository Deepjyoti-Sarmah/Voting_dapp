// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {

//   const Voting = await hre.ethers.getContractFactory("Voting");
//   const voting = await Voting.deploy();

//   await voting.deployed();

//   console.log("Voting contract deployed to:", voting.address);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

const hre = require("hardhat");

async function main() {

  // Create the Voting contract factory
  const VotingFactory = await hre.ethers.getContractFactory("Voting");

  // Deploy the Voting contract
  const voting = await VotingFactory.deploy();

  // Get the address of the deployed contract
  const votingAddress = await voting.address;

  // Save the address of the deployed contract to a file
  await hre.write("__votingAddress.json", JSON.stringify(votingAddress));

  console.log("Voting contract deployed to:", votingAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

