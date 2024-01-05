function maxValF(range1, range2, hMax, k) {
    let numArr = []
    for(let x = range1[0]; x <= range1[1]; x++) {
        for(let y = range2[0]; y <= range2[1]; y++) {
            if(x != y) {
                let num = Math.pow(Math.floor((x + y) / Math.abs(x - y)), Math.abs(x - y))
                numArr.push(num)
            }
        }
    }
    return Array(...new Set(numArr.filter(item => item <= hMax).sort((a, b) => b - a))).slice(0, k).reverse()
}

console.log(maxValF([1, 10], [1, 10], hMax = 500, k = 4))