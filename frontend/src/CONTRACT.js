export const CONTRACT_ADDRESS =  "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const CONTRAACT_ABI =  [
        {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "inputs": [
            {
            "internalType": "string",
            "name": "name",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "party",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "imageUri",
            "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "candidateCount",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
            "internalType": "string",
            "name": "name",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "party",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "imageUri",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "totalVotes",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "name": "votes",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        }
]