const userAddress = "0xbFA666EA24B77b247CC62f3D477a3656B228F012";
const privateKey = "";
const rpc = "https://eth-sepolia.g.alchemy.com/v2/";

const ethBalance = document.getElementById("ethBalance");
const ethAccount = document.getElementById("ethAccount");
const ethSendToAddress = document.getElementById("ethSendTo");
const ethSendAmount = document.getElementById("ethSendAmount");
const sendButton = document.getElementById("sendButton");
const ethCurrency = " ETH";

const ethData = {
    provider: null,
    signer: null,
    userAddress: null,
    chainId: null
}

const prepareEthWrapper = async () => {
    ethAccount.textContent = userAddress;
    const balance = await ethData.provider.getBalance(ethData.userAddress);
    const balanceForUi = ethers.utils.formatUnits(balance, 18);
    ethBalance.textContent = Number(balanceForUi).toFixed(6);
}

const onSendEth = async () => {
    
    const sendToValue = ethSendToAddress.value;
    const sendAmountValue = ethers.utils.parseUnits(ethSendAmount.value, 18);
    alert("Sending " + sendAmountValue + ethCurrency + " to " + sendToValue);
    const tx = await ethData.signer.sendTransaction({
        to: sendToValue,
        value: sendAmountValue
    });
    console.log("sendToValue: " + sendToValue);
    console.log("sendAmountValue: " + sendAmountValue);
    console.log("hash: " + tx.hash);
    const result = await tx.wait();
    console.log("result: " + result);
    await prepareEthWrapper();
    ethSendToAddress.value = '';
    sendAmountValue.value = '';
}

const onConnect = async () => {
    console.log("onConnect");
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const signer = new ethers.Wallet(privateKey, provider);
    const network = await provider.getNetwork();

    ethData.provider = provider;
    ethData.userAddress = userAddress;
    ethData.chainId = network.chainId;
    ethData.signer = signer.address;

    console.log(ethData);
    console.log("connected");

    prepareEthWrapper();
}

sendButton.addEventListener('click', onSendEth);

onConnect();