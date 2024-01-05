function isSolved(board) {
    console.log(board.flat().join(''))
    console.log(board.toString())
    return board
}

console.log(isSolved([[0,0,1],
                      [0,1,2],
                      [2,1,0]]))
// Test.expect(isSolved([[0,0,1],
                    //   [0,1,2],
                    //   [2,1,0]]) === -1);
// 0 0 1 0 1 2 2 1 0

// Test.expect(isSolved([[1,1,1],
                    //   [0,1,2],
                    //   [2,1,0]]) === -1);
// 1 1 1 0 1 2 2 1 0

// Test.expect(isSolved([[0,0,1],
                    //   [0,1,2],
                    //   [1,1,2]]) === -1);
// 0 0 1 0 1 2 1 1 2


