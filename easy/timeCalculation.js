function timeCalculation(s){
    let minAmount = Math.floor(s/60);
    let hr = Math.floor(minAmount/60);
    let min = minAmount%60;
    let sec = s%60;
    return pad(hr)+':' + pad(min) +':' + pad(sec);
}
function pad(d) {
    return (d<10) ? '0'+d.toString(): d.toString();
}
