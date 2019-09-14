function onesAndZeros2(s){
    while (s.match(/000|111/)!=undefined) {
        s= s.replace(/000|111/g, '');
    }
    return s.length;
}
