const ethBalance = document.getElementById("ethBalance");
const ethAccount = document.getElementById("ethAccount");
const ethSendToAddress = document.getElementById("ethSendTo");
const ethSendAmount = document.getElementById("ethSendAmount");
const sendButton = document.getElementById("sendButton");
const ethCurrency = " ETH";
const connectButton = document.getElementById("connectButton");
const connectBtcButton = document.getElementById("connectBtcButton");
const ethWrapper = document.getElementById("ethWrapper");
const transactionLink = document.getElementById("transactionLink");

const ethData = {
    provider: null,
    signer: null,
    userAddress: null,
    chainId: null
}

const prepareEthWrapper = async () => {
    ethAccount.textContent = ethData.userAddress;
    const balance = await ethData.provider.getBalance(ethData.userAddress);
    const balanceForUi = ethers.utils.formatUnits(balance, 18);
    ethBalance.textContent = Number(balanceForUi).toFixed(6);
}

const onSendEth = async () => {
    
    const sendToValue = ethSendToAddress.value;
    const sendAmountValue = ethers.utils.parseUnits(ethSendAmount.value, 18);
    // alert("Sending " + sendAmountValue + ethCurrency + " to " + sendToValue);
    console.log("sendToValue: " + sendToValue);
    console.log("sendAmountValue: " + sendAmountValue);
    console.log("ethData: " + ethData);

    const tx = await ethData.signer.sendTransaction({
        to: sendToValue,
        value: sendAmountValue
    });
    
    alert("hash: " + tx.hash);
    const result = await tx.wait();
    const dynamicURL = "https://sepolia.etherscan.io/tx/" + tx.hash;
    transactionLink.classList.add('active');
    transactionLink.href = dynamicURL;
    transactionLink.innerText = 'You can find your tx here'; 
    console.log("result: " + result);
    await prepareEthWrapper();
    ethSendToAddress.value = '';
    sendAmountValue.value = '';
}

const onConnect = async () => {
    console.log("onConnect");
    if(!window.ethereum) {
        alert("Please install Metamask!");
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();

    ethData.provider = provider;
    ethData.userAddress = await signer.getAddress();
    ethData.chainId = network.chainId;
    ethData.signer = signer;

    console.log("connected");
    prepareEthWrapper();
    connectButton.parentElement.classList.remove('active');
    ethWrapper.classList.add('active');
}

sendButton.addEventListener('click', onSendEth);
connectButton.addEventListener('click', onConnect);
