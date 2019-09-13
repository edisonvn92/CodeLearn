function sumInStringSubarray(s){
    let arr = s.split('');
    let sum = 0;
    arr.forEach(function(ele, index) {
        sum+=parseInt(ele)*((arr.length-index)*(index+1));
    });
    return sum;

}
