function orderWeight(strng) {
    return strng.trim().split(" ").sort(sortByWeight).join(' ');
}

function sortByWeight(a, b) {
    const aSum = [...a].reduce((acc, v) => acc + +v, 0)
    const bSum = [...b].reduce((acc, v) => acc + +v, 0)
    if(aSum == bSum) {
        if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
    }
     return aSum - bSum;
}

console.log(orderWeight("11 11 2000 22 10003 123 1234000 44444"))