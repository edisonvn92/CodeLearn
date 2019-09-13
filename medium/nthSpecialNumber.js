function nthSpecialNumber(n){
    let i=1;
    let numArr = [];
    let totalCount = 0;
    while (totalCount<n) {
        totalCount=i*(i/2-1);
        i++;
    }
    for(let a=0; a<=i; a++) {
        for (let b=0; b<=i; b++) {
            for (let c=0; c<=i; c++) {
                numArr.push(Math.pow(2,a)*Math.pow(3,b)*Math.pow(5,c));
            }
        }
    }
    numArr.sort(function(a,b) {
        return a-b;
    });
    return numArr[n-1];
}
