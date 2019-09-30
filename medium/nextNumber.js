function nextNumber(n){
    let check = n+1;
    let count = countBit(n);
    while(countBit(check)!= count) {
        check++;
    }
    return check;
}
function countBit(n) {
    let count=0;
    while (n>0) {
        if (n%2==1) count++;
        n = Math.floor(n/2);
    }
    return count;
}
