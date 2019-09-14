function leastCommonMultiple(inputArray){
    let max = Math.max.apply(null, inputArray);
    let powerArr = new Array(max+1).fill(0)
    let result = 1;
    for (let i=0; i<inputArray.length; i++) {
        let num = inputArray[i];
        if (num>1) {
            let divide = 2;
            while (num>1 && divide<=num) {
                let count=0;
                while (isPrime(divide) && num%divide==0) {
                    count++;
                    num = num/divide;
                    if (count>powerArr[divide]) {
                        powerArr[divide]=count;
                    }
                }
                divide++;
            }
        }
        
    }
    powerArr.forEach(function(value, index) {
        if (value>0) {
            result*=Math.pow(index, value);
        }
    })
    return result;
}

function isPrime(n) {
    if (n<=1) { return false;}
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n%i == 0) {
            return false;
        }
    }
    return true;
}
