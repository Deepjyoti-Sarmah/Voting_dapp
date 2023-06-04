const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  let votingContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function() {
    const Voting = await ethers.getContractFactory("Voting");
    votingContract = Voting.deploy();
    (await votingContract).deployed();

    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("should add a candidate", async function() {
    await votingContract.addCandidate("Alba", "Jharu", "testimage.jpeg");

    const candidate = await votingContract.candidate(1);
    expect(candidate.name).to.equal("Alba");
    expect(candidate.party).to.equal("Jharu");
    expect(candidate.imageUri).to.equal("testimage.jpg");
  });

  it("should increase vote count", async function() {
    await votingContract.addCandidate("Alba", "Lotus", "testimage.jpeg");

    await votingContract.vote(1);
    await votingContract.vote(1);

    const votes = await votingContract.votes(1);
    const totalVotes = await votingContract.totalVotes();

    expect(votes).to.equal(2);
    expect(totalVotes).to.equal(2);

  });

});
