function arrayMaxConsecutiveSum(inputArray, k){
    let max = 0;
    for (let i=0; i<=inputArray.length-k; i++) {
        let sum = 0.
        for (let j=i; j<i+k; j++) {
            sum += inputArray[j];
        }
        if (sum>max) {
            max = sum;
        }
    }
    return max;
}
