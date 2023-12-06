// JavaScript for dynamic behavior (if needed)
let web3;
let contract;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable(); // Request access
            initContract();
        } catch (error) {
            console.error("User denied account access")
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        initContract();
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

function initContract() {
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';
    const contractABI = YOUR_CONTRACT_ABI;
    contract = new web3.eth.Contract(contractABI, contractAddress);
}
