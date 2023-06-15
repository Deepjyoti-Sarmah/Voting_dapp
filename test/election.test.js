// const {
//   time,
//   loadFixture,
// } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
// const { expect } = require("chai");

// const hre = require("hardhat");

// describe("Election", function () {

//   let election;

//   beforeEach(async function () {
//     // Deploy the Election contract
//     election = await hre.ethers.getContractFactory("Election");
//     election = await election.deploy();

//     await election.deployed()
//   });

//   it("should add a candidate", async function () {
//     // Add a candidate
//     const name = "John Doe";
//     const party = "Democrat";
//     const imageUri = "https://example.com/image.png";
//     await election.addCandidate(name, party, imageUri);

//     // Check that the candidate was added
//     const candidate = await election.candidates(1);
//     expect(candidate.name).toEqual(name);
//     expect(candidate.party).toEqual(party);
//     expect(candidate.imageUri).toEqual(imageUri);
//   });

//   it("should vote for a candidate", async function () {
//     // Add a candidate
//     const name = "John Doe";
//     const party = "Democrat";
//     const imageUri = "https://example.com/image.png";
//     await election.addCandidate(name, party, imageUri);

//     // Vote for the candidate
//     await election.vote(1);

//     // Check that the vote was counted
//     const votes = await election.votes(1);
//     expect(votes).toEqual(1);
//   });

// });
// describe("Election", function () {
//   let election;
//   let owner;
//   const candidateName = "Candidate 1";
//   const candidateParty = "Party 1";
//   const candidateImageUri = "image_uri_1";

//   beforeEach(async function () {
//     const Election = await hre.ethers.getContractFactory("Election");
//     election = await Election.deploy();
//     await election.deployed();

//     [owner] = await ethers.getSigners();
//   });

//   it("should add a candidate", async function () {
//     // Add a candidate
//     await election.addCandidate(candidateName, candidateParty, candidateImageUri);

//     // Get the candidate details
//     const candidate = await election.candidates(1);

//     // Verify the candidate details
//     expect(candidate.name).to.equal(candidateName);
//     expect(candidate.party).to.equal(candidateParty);
//     expect(candidate.imageUri).to.equal(candidateImageUri);
//   });

//   it("should increment the vote count", async function () {
//     // Add a candidate
//     await election.addCandidate(candidateName, candidateParty, candidateImageUri);

//     // Vote for the candidate
//     await election.vote(1);

//     // Get the vote count for the candidate
//     const voteCount = await election.votes(1);

//     // Verify the vote count
//     expect(voteCount).to.equal(1);
//   });

//   it("should increment the total vote count", async function () {
//     // Add a candidate
//     await election.addCandidate(candidateName, candidateParty, candidateImageUri);

//     // Vote for the candidate
//     await election.vote(1);

//     // Get the total vote count
//     const totalVotes = await election.totalVotes();

//     // Verify the total vote count
//     expect(totalVotes).to.equal(1);
//   });
// });
