// const {
//   time,
//   loadFixture,
// } = require("@nomicfoundation/hardhat-network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("Voting", function () {
//   // We define a fixture to reuse the same setup in every test.
//   // We use loadFixture to run this setup once, snapshot that state,
//   // and reset Hardhat Network to that snapshot in every test.

//   let votingContract;
//   let owner;
//   let addr1;
//   let addr2;

//   beforeEach(async function() {
//     const Voting = await ethers.getContractFactory("Voting");
//     votingContract = Voting.deploy();
//     await votingContract.deployed();

//     [owner, addr1, addr2] = await ethers.getSigners();
//   });

//   it("should add a candidate", async function() {
//     await votingContract.addCandidate("Alba", "Jharu", "testimage.jpeg");

//     const candidate = await votingContract.candidate(1);
//     expect(candidate.name).to.equal("Alba");
//     expect(candidate.party).to.equal("Jharu");
//     expect(candidate.imageUri).to.equal("testimage.jpg");
//   });

//   it("should increase vote count", async function() {
//     await votingContract.addCandidate("Alba", "Lotus", "testimage.jpeg");

//     await votingContract.vote(1);
//     await votingContract.vote(1);

//     const votes = await votingContract.votes(1);
//     const totalVotes = await votingContract.totalVotes();

//     expect(votes).to.equal(2);
//     expect(totalVotes).to.equal(2);

//   });

// });


import { Voting } from "./Voting.sol";

describe("Voting contract", () => {

  let votingContract;

  beforeEach(async () => {
    votingContract = await Voting.deployed();
  });

  it("should have an owner", async () => {
    expect(votingContract.owner()).toEqual(await web3.eth.accounts[0]);
  });

  it("should be able to add a candidate", async () => {
    await votingContract.addCandidate("Candidate 1", "Party 1", "image.png");
    expect(votingContract.candidates(1).name).toEqual("Candidate 1");
    expect(votingContract.candidates(1).party).toEqual("Party 1");
    expect(votingContract.candidates(1).imageUri).toEqual("image.png");
  });

  it("should not be able to add a candidate if the caller is not the owner", async () => {
    await expect(votingContract.addCandidate("Candidate 2", "Party 2", "image.png")).to.be.revertedWith("Not the owner of the contract");
  });

  it("should be able to vote for a candidate", async () => {
    await votingContract.addCandidate("Candidate 1", "Party 1", "image.png");
    await votingContract.vote(1);
    expect(votingContract.votes(1)).toEqual(1);
    expect(votingContract.totalVotes).toEqual(1);
  });

  it("should not be able to vote for a candidate that does not exist", async () => {
    await expect(votingContract.vote(10)).to.be.revertedWith("Candidate doesn't exist");
  });

});