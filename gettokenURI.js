const Web3 = require('web3'); // Include the Web3.js library
const web3 = new Web3('YOUR_ETHEREUM_PROVIDER_URL'); // Replace with your Ethereum provider URL
const nftContractAddress = 'YOUR_NFT_CONTRACT_ADDRESS'; // Replace with the NFT contract address
const tokenId = 123; // Replace with the specific NFT token ID

// Create an instance of the NFT contract
const nftContract = new web3.eth.Contract(NFT_ABI, nftContractAddress); // Replace NFT_ABI with the ABI of your NFT contract

// Call the tokenURI function
nftContract.methods.tokenURI(tokenId).call()
  .then((uri) => {
    console.log('Token URI:', uri);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
