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
    const contractAddress = 'bzz-raw://826a85e5d3fd9aca3ca332f3c60b349fbf565fb01390d6e76527c2d224740c64';
    const contractABI = 0xe9b6e874dc2d94f636c6b786ae54e6d066ac78ea90135a4df721e32bd00d59ce;
    contract = new web3.eth.Contract(contractABI, contractAddress);
}
async function callContractFunction() {
    const accounts = await web3.eth.getAccounts();
    contract.methods.yourContractMethod().send({ from: accounts[0] })
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
}
