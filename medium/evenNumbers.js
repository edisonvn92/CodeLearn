function evenNumbers(n, p){
    let powerOf2 = Math.pow(2,n);
    if ((powerOf2)>p) {
        return -1;
    } else {
        let i = Math.floor(p/powerOf2);
        if (i%2==1) {
            return i*powerOf2;
        } else {
            return (i-1)*powerOf2;
        }
    }
}
