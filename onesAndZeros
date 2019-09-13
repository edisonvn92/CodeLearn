//Give a string s with length n contain only 1 and 0. Consider the following operation:
//choose any two adjacent positions in the string, and if one them contains 1, 
//and the other contains 0, then remove these two digits from the string, 
//obtaining a string of length n - 2 as a result. And what is the minimum length of 
//the string that can remain after applying the described operation several times?

function onesAndZeros(s){
    let arr = s.split('');
    arr.sort();
    if (arr.indexOf('1')==0||arr.indexOf('1')==-1) {
        return arr.length;
    } else {
        return Math.abs(arr.length-2*arr.indexOf('1'));
    }
}
