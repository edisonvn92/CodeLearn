function higherVersion(v1, v2){
    arr1 = v1.split('.').map(Number);
    arr2 = v2.split('.').map(Number);
    let i=0;
    while (i<arr1.length||i<arr2.length) {
        if (arr1[i]>arr2[i]) {
            return true;
        } else if (arr1[i]<arr2[i]) {
            return false;
        }
        i++;
    }
    return false;
}
