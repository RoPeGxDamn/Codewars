function generateHashtag(str) {
  let arr = String(str).trim().split(" ");
  if(arr[0] == '') return false
  console.log(arr)
  return arr.length != 0 && !arr.find((item) => item.length >= 140)
    ? `#${(arr.length > 100
        ? [...new Set(arr.map((item) => item.trim()))]
        : arr
      )
        .map((item) => item.charAt(0).toLocaleUpperCase() + item.slice(1))
        .join("")}`
    : false;
}

console.log(generateHashtag(" "));
// length <= 140
