function minimalNumberOfCoins(coins, price){
    let count = 0;
    let start = 0;
    while (coins[start]<=price) {
        start++;
    }
    start--;
    while (price>0&&start>=0) {
        count+=Math.floor(price/coins[start]);
        price = price%coins[start];
        start--;
    }
    return count;

}
