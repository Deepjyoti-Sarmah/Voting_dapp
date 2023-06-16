// const {
//   time,
//   loadFixture,
// } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const hre = require("hardhat");

describe("Election", function() {
    let electionContract;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function() {
        //Deploy the contract
        const Election = await hre.ethers.getContractFactory("Election");
        electionContract = await Election.deploy();
        await electionContract.deployed();

        //Get signers
        [owner, addr1, addr2] = await hre.ethers.getSigners();
    });

    it("should have an initial candidate count of zero", async function () {
        const candidateCount = await electionContract.candidateCount();
        expect(candidateCount).to.equal(0);
    })

    it("should allow the owner to add candidate", async function() {
        await electionContract.connect(owner).addCandidate("Jack", "Party 1", "image.png");
        const candidateCount = await electionContract.candidateCount();
        expect(candidateCount).to.equal(1);
    });

    it("should not allow non-owners to add a candidate", async function() {
        await expect(electionContract.connect(addr1).addCandidate("Jack", "Party 2", "image.png")).to.be.revertedWith("Not the owner");
    });

    it("should increment the vote count when a candidate is voted for", async function() {
        await electionContract.connect(owner).addCandidate("Jack", "Party 3", "image.png");
        await electionContract.connect(addr1).vote(1);
        const totalVotes = await electionContract.totalVotes();
        expect(totalVotes).to.equal(1);
    });

    it("should not allow for non-existing candidates", async function() {
        await expect(electionContract.connect(addr1).vote(1)).to.be.revertedWith("Candidate doesn't exist");
    })
    
})
