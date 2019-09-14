function sudokuChecking(grid){
    for (let row=0; row < 9; row++) {
        for (let col=0; col<9; col++) {
            if (!isNaN(parseInt(grid[row][col]))) {
                for (let i=col+1; i<9; i++) {
                    if (grid[row][i] == grid[row][col]) {
                        return false;
                    }
                }
                for (let j=row+1; j<9; j++) {
                    if (grid[row][col]==grid[j][col]) {
                        return false;
                    }
                }
                let subRow = Math.floor(row/3);
                let subCol = Math.floor(col/3);
                for(let i=subRow*3; i<subRow*3+3; i++) {
                    for (let j=subCol*3; j<subCol*3+3; j++) {
                        if (i!=row && j!=col && grid[i][j]==grid[row][col]) {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}
