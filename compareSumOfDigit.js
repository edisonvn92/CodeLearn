function compareSumOfDigits(input){
    let arr = input.split('');
    let diff = 0;
    for (let i =0; i<arr.length; i++) {
        if (parseInt(arr[i])%2==0) {
            diff-=parseInt(arr[i]);
        } else {
            diff+=parseInt(arr[i]);
        }
    }
    return diff;
}
