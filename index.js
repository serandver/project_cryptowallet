// {
//   "private": "0a1ebab3687ebdf34273fd6d99e8fb9e7c9b03c46828e85b486f8d8e45afa905",
//   "public": "036bb5bee8dc63a88ad4ab41e07ad4281bbd8f3150579541a9a6e4fdb303a8aac9",
//   "address": "tb1q6yqzyuqnpdc2w6eufrf6tlsy8u4hjxndt2k79d",
//   "wif": "cMvNdGtN1ctY6Jj2ntMRc45bUtsGPx9V3ynVf8SUYGcoRcGsHkRH"
// }

const ERC20_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "increasedSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cap",
          "type": "uint256"
        }
      ],
      "name": "ERC20ExceededCap",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "cap",
          "type": "uint256"
        }
      ],
      "name": "ERC20InvalidCap",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cap",
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
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenNumber",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
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
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
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
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }];
const erc20Address = "0xb184379067ff3fd9e860b3973a873b1a4c443b35";
const btcPrivateKey = '0a1ebab3687ebdf34273fd6d99e8fb9e7c9b03c46828e85b486f8d8e45afa905';

//switchers
const ethSwitcher = document.getElementById("ethSwitcher");
const erc20Switcher = document.getElementById("erc20Switcher");
const btcSwitcher = document.getElementById("btcSwitcher");
const switchers = [ethSwitcher, erc20Switcher, btcSwitcher];

//ETH part
const ethBalance = document.getElementById("ethBalance");
const ethAccount = document.getElementById("ethAccount");
const ethSendToAddress = document.getElementById("ethSendTo");
const ethSendAmount = document.getElementById("ethSendAmount");
const sendButton = document.getElementById("sendButton");
const ethCurrency = " ETH";
const ethTransactionLink = document.getElementById("ethTransactionLink");
const erc20TransactionLink = document.getElementById("erc20TransactionLink");

//ERC20 part
const erc20Balance = document.getElementById("erc20Balance");
const erc20Symbol = document.getElementById("erc20Symbol");
const erc20Name = document.getElementById("erc20Name");
const erc20Account = document.getElementById("erc20Account");
const erc20SendToAddress = document.getElementById("erc20SendTo");
const erc20SendAmount = document.getElementById("erc20SendAmount");
const erc20SendButton = document.getElementById("erc20SendButton");

//BTC part
const btcBalance = document.getElementById("btcBalance");
const btcAccount = document.getElementById("btcAccount");
const btcSendToAddress = document.getElementById("btcSendTo");
const btcSendAmount = document.getElementById("btcSendAmount");
const btcSendButton = document.getElementById("btcSendButton");
const btcSendFee = document.getElementById("btcSendFee");

// wrappers
const ethWrapper = document.getElementById("ethWrapper");
const erc20Wrapper = document.getElementById("erc20Wrapper");
const btcWrapper = document.getElementById("btcWrapper");
const wrappers = [ethWrapper, erc20Wrapper, btcWrapper];

//buttons
const connectButton = document.getElementById("connectButton");
const connectBtcButton = document.getElementById("connectBtcButton");
let switcherState = "ETH";

const ethData = {
    provider: null,
    signer: null,
    userAddress: null,
    chainId: null
}

const btcData = {
    network: null,
    userAddress: null,
    keyPair: null,
    p2pkh: null,
    balance: null
}

const prepareEthWrapper = async () => {
    ethAccount.textContent = ethData.userAddress;
    const balance = await ethData.provider.getBalance(ethData.userAddress);
    const balanceForUi = ethers.utils.formatUnits(balance, 18);
    ethBalance.textContent = Number(balanceForUi).toFixed(6);
}

const prepareErc20Wrapper = async () => {
    erc20Account.textContent = ethData.userAddress;
    const ERC20Contract = new ethers.Contract(erc20Address, ERC20_ABI, ethData.provider);
    const balance = await ERC20Contract.balanceOf(ethData.userAddress);
    const decimals = await ERC20Contract.decimals();
    const symbol = await ERC20Contract.symbol();
    const name = await ERC20Contract.name();
    const balanceForUi = ethers.utils.formatUnits(balance, decimals);
    erc20Balance.textContent = balanceForUi;
    erc20Symbol.textContent = symbol;
    erc20Name.textContent = name;
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
    ethTransactionLink.classList.add('active');
    ethTransactionLink.href = dynamicURL;
    ethTransactionLink.innerText = 'You can find your transaction here'; 
    console.log("result: " + result);
    ethSendToAddress.value = '';
    ethSendAmount.value = '';
    await prepareEthWrapper();
}

const onSendErc20 = async () => {
    const sendToValue = erc20SendToAddress.value;
    const ERC20Contract = new ethers.Contract(erc20Address, ERC20_ABI, ethData.signer);
    const decimals = await ERC20Contract.decimals();
    const sendAmountValue = ethers.utils.parseUnits(erc20SendAmount.value, decimals);
    try {
        const tx = await ERC20Contract.transfer(sendToValue, sendAmountValue);
        console.log("Transaction hash: " + tx.hash);
        const result = await tx.wait();
        console.log("Transaction receipt: " + result);
        alert("hash: " + tx.hash);
        const dynamicURL = "https://sepolia.etherscan.io/tx/" + tx.hash;
        erc20TransactionLink.classList.add('active');
        erc20TransactionLink.href = dynamicURL;
        erc20TransactionLink.innerText = 'You can find your transaction here'; 
        console.log("result: " + result);
        erc20SendAmount.value = "";
        erc20SendTo.value = "";
        prepareErc20Wrapper();
    } catch (e) {
        console.error(e);
    }
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
    await prepareEthWrapper();
    await prepareErc20Wrapper();

    connectButton.parentElement.classList.remove('active');

    if(switcherState === "ETH") {
        ethWrapper.classList.add('active');
    } else if (switcherState === "ERC20") {
        erc20Wrapper.classList.add('active');
    }
    
}

const onConnectBtc = async () => {
    console.log("onConnect BTC");
    const network = bitcoinjs.networks.testnet;
    
    btcData.network = network;
    connectBtcButton.parentElement.classList.remove("active");
    changeSwitcherState("BTC");
    btcData.keyPair = bitcoinjs.ECPair.fromPrivateKey(bitcoinjs.Buffer.from(btcPrivateKey, 'hex'), { network: network });;
    btcData.p2pkh = bitcoinjs.payments.p2pkh({ pubkey: btcData.keyPair.publicKey, network: btcData.network });
    btcData.userAddress = btcData.p2pkh.address;
    btcAccount.textContent = btcData.userAddress;
    try {
        const responce = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcData.userAddress}/balance`);
        const data = await responce.json();
        const balance = data.final_balance;
        btcData.balance = balance;
        const balanceForui = ethers.utils.formatUnits(balance, 8);
        btcBalance.textContent = balanceForui;
    } catch (e) {

    }
    console.log("connected");
}

const changeSwitcherState = (newState) => {
    if (switcherState === newState) {
       return;
    }
    switcherState = newState;
    switchers.forEach((switcher, i) => {
        if (switcher.textContent === newState) {
            switcher.classList.add("active");
            wrappers[i].classList.add("active");
            return;
        }
        switcher.classList.remove("active");
        wrappers[i].classList.remove("active");
    });   
    
}

sendButton.addEventListener('click', onSendEth);
connectButton.addEventListener('click', onConnect);
connectBtcButton.addEventListener('click', onConnectBtc);
erc20SendButton.addEventListener('click', onSendErc20);
ethSwitcher.addEventListener('click', () => changeSwitcherState("ETH"));
erc20Switcher.addEventListener('click', () => changeSwitcherState("ERC20"));
btcSwitcher.addEventListener('click', () => changeSwitcherState("BTC"));