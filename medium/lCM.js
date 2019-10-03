function lCM(n){
    if (n==1) return 1;
    let primeList = [];
    let powerList = [];
    for (let i=2; i<=n; i++) {
        let j =0;
        let k = i;
        while (primeList[j] && primeList[j]<= Math.sqrt(k)) {
            let divide = 0;
            while (k%primeList[j]==0) {
                k = k/primeList[j];
                divide++;
                if (divide>powerList[j]) powerList[j]++;
            }
            j++;
        }
        if(k==i) {
            primeList.push(i);
            powerList.push(1);
        }
    }
    let result = 1;
    for (let i=0; i<primeList.length; i++) {
        result *=(Math.pow(primeList[i],powerList[i]));
    }
    return result;
    
}
