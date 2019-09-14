function boxBlur(image){
    let result = [];
    for (let x=0; x<image.length-2; x++) {
        let row = [];
        for (let y=0; y<image[0].length-2; y++) {
            let sum=0;
            for (let i=0; i<=2; i++) {
                for (let j=0; j<=2; j++) {
                    sum+=image[x+i][y+j];
                }
            }
            row.push(Math.floor(sum/9));
        }
        result.push(row);
    }
    return result;
}
