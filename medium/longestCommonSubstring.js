function longestCommonSubstring(a, b){
    let maxLength = 0;
    let maxString = [];
    let arr1 = a.split('');
    for (let i=0; i<arr1.length; i++) {
        if (b.indexOf(arr1[i])>=0) {
            let localMax = 1;
            let subStr = arr1[i];
            let j = i+1;
            while (b.indexOf(subStr+arr1[j])>=0) {
                subStr+=arr1[j];
                j++;
                localMax++;
            }
            if (localMax>maxLength) {
                maxLength = localMax;
                maxString = [subStr];
            } else if (localMax==maxLength) {
                maxString.push(subStr);
            }
        }
    }
    if (maxString.length==0) {
        return '';
    } else {
        maxString.sort();
        return maxString[0];
    }
}
