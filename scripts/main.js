let person = prompt("Name");
alert (`${person} welcome, we will now calculate the value of your crypto portfolio in USD`);
let btc = prompt("Enter the amount of BTC you own");
let eth = prompt("Enter the amount of ETH you own");
let btcToUSD = btc * 40000
let ethToUSD = eth * 2500
document.write (`${btc} BTC in your portfolio has a value of $${btcToUSD} USD</br>`);
document.write (`${eth} ETH in your portfolio has a value of $${ethToUSD} USD</br>`);
let portfolio = ethToUSD + btcToUSD
document.write (`Your full portfolio is worth $${portfolio} USD`);