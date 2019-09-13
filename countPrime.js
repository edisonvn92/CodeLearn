
function countPrime(n){
    if (n<=2) {
        return 0;
    }
    if (n==3) {
        return 1;
    }
    let primeList = [3];
    for (let i=5; i<n; i+=2) {
        if (isPrime(i, primeList)) {
            primeList.push(i);
        }
    }
    return primeList.length+1;
}
function isPrime(n, primeList){
    if (n<=1) { return false;}
    let j =0;
        while (primeList[j]<= Math.sqrt(n)) {
            if (n%primeList[j]==0) {
                return false;
            } else {
                j++;
            }
        }
    return true;
}
