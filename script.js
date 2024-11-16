const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const monero = document.getElementById("monero");

const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

pricesWs.onmessage = function (msg) {
    const data = JSON.parse(msg.data); 
    console.log(data); 
    if (data.bitcoin) {
        bitcoin.innerHTML = `$${Math.floor(data.bitcoin)}`;
    }
    if (data.ethereum) {
        ethereum.innerHTML = `$${Math.floor(data.ethereum)}`;
    }
    if (data.monero) {
        monero.innerHTML = `$${Math.floor(data.monero)}`; 
    }
};
