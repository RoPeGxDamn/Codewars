function solution(input, markers) {
//   const re = new RegExp(
//     "(" + markers.map((item) => "\\" + item).join("|") + "|\\n)"
//   );
//   let isRemoved = false;
//     return input.split(re).filter((item) => {
//     if (markers.includes(item)) {
//       isRemoved = true;
//       return false;
//     } else if (isRemoved) {
//       isRemoved = false;
//       return false;
//     } else {
//     return item;
//     }
//   }).map(item => item != "\n" ? String(item).trim() : item)
//    .join('').trim();
return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => {console.log(line.split(marker)[0].trim(), line)}
    )
  ).join('\n')
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ]) == "apples, plums\npears\noranges"
);

console.log("apples, plums\npears\noranges");

// apples, plums\npears\noranges
