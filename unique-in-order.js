var uniqueInOrder=function(iterable){
  let res = [];
  let arr = Array.isArray(iterable) ? iterable : iterable.split('')
  let prev = ''
  for (let index = 0; index < arr.length; index++) {
    if(prev === arr[index]) {
      continue;
    }
    res.push(arr[index])
    prev = arr[index];
  }
  return res;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
