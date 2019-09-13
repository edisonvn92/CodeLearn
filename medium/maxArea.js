function maxArea(heights){
    let len = heights.length;
    let max = Math.min(heights[0], heights[len-1])*(len-1);
    let maxHeight = Math.max.apply(null, heights);
    for (let i=0; i<heights.length-1; i++) {
        if (heights[i]>=(max/(len-i))) {
            let localMax = 0;
            for (let j=i+1; j<heights.length; j++) {
                let product = Math.min(heights[i], heights[j])*(j-i);
                if (product > localMax) {
                    localMax = product;
                }
            }
            if (localMax>max) {
                max = localMax;
            }
        }
    }
    return max;
}
