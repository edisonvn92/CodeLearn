function cakeSlice(n){
    if (n==0) {
        return 1;
    }
    if (n<=2) {
        return 2*n;
    } else {
        return ((2*n)+((n-1)*(n-2)/2));
    }
}
