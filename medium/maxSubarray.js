function maxSubarray(inputArray){
    let max = 0;
    for (let i=0; i<inputArray.length; i++) {
        if (inputArray[i]>0) {
            let personalMax = 0;
            let sum =0;
            for (let j=i; j<inputArray.length;j++) {
                sum+=inputArray[j];
                if (sum>personalMax) {
                    personalMax = sum;
                }
            }
            if (personalMax>max) {
                max = personalMax;
            }
        }
    }
    return max;
}
