function bitOneCount(a, b){
    let count =0;
    for (let i=a; i<=b; i++) {
        let j=i;
        while (j>0) {
            if (j%2==1) {
                count++;
            }
            j = Math.floor(j/2);
        }
    }
    return count;
}
