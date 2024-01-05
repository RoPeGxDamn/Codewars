function sumIntervals(intervals) {
    return new Set(intervals.map(item => {
        return [String(item[0]), String(item[1])]
    }).map(([val1, val2]) => {
        console.log(val1, val2)
        if(val1.length < 8) return [].map.call('_'.repeat(val2 - val1), v => ++val1)
        else return [val1, val2]
    })
    )
    // .reduce((acc, v) => acc.concat(v), [])).size
}

console.log(sumIntervals([[-1e9, 1e9]]))
console.log(Number('1000000000'))
// console.log(console.log([-1e9, 1e9]))