function clockHandAngle(str){
    let arr = str.split(':').map(Number);
    let hr = arr[0];
    let min = arr[1];
    let sec = arr[2];
    let angleHr;
    if (hr>=12) {
        angleHr=(hr-12)*30+min/2+sec/120;
    } else {
        angleHr = hr*30+min/2+sec/120;
    }
    let angleMin = min*6+sec/10;
    let angle = Math.round(Math.abs((angleHr-angleMin)*100000))/100000;
    return Math.min(angle, 360-angle);
}
