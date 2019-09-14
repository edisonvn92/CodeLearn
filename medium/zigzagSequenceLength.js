function zigzagSequenceLength(a){
    let diff = [];
    a.forEach(function(ele, index) {
        if (a[index+1]!=undefined) {
            diff.push(ele-a[index+1]);
        }
    });
    if (diff==undefined) {
        return 1;
    }
    let max =1;
    for (let i=0; i<diff.length; i++) {        
        let localMax =2;
        if (diff[i]==0) {
            localMax=1;   
        }
        let j =i;
        while (diff[j+1]!=undefined && diff[j]*diff[j+1]<0) {
            localMax++;
            j++;
        }
        if (localMax>max) {
            max = localMax;
        }
    }
    return max;
}
