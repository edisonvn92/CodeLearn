function pagesNumbering(n){
    let digitNoN= n.toString().split('').length;
    let countDigit = n;
    for (let i=1; i<digitNoN; i++) {
        let j = parseInt(new Array(i).fill(9).join(''));
        countDigit+=(n-j);
    }
    return countDigit;
}
