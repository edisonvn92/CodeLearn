function countZeroDigit(a, b){
    let count = 0;
    for (let i=a; i<=b; i++) {
        let j=i;
        while (Math.floor(j/10)>0) {
            if (j%10==0) {
            count++;
            }
            j=Math.floor(j/10);
        }
    }
    return count;
}
