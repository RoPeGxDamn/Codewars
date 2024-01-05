function candies(kids){
    console.log(kids.length)
    console.log(Math.max(...kids))
    return kids.length > 1 ? kids.reduce((acc, v) => acc + Math.max(...kids) - v, 0) : -1
  }

  console.log(Math.max([1,8,3,4]))

console.log(candies([0]))