function validBraces(braces) {
  const obj = {};
  
  let first = false
  braces.split("").map(item => {
    
  })
  console.log(braces.split("").sort())
  if (braces.length % 2 == 0) {
    braces.split("").map((item) => {
      obj[item] = obj[item] ? ++obj[item] : 1;
    });
    let resultArr = [];
    console.log(obj);
    // Array(...Object.keys(obj)).forEach(v, i, arr => {
        
    // })
    for (key in obj) {
      if (key == "{") resultArr.push(obj[key] == obj["}"]);
      else if (key == "(") resultArr.push(obj[key] == obj[")"]);
      else if (key == "[") resultArr.push(obj[key] == obj["]"]);
      else if (key == "]") resultArr.push(obj[key] == obj["["]);
      else if (key == "}") resultArr.push(obj[key] == obj["{"]);
      else if (key == ")") resultArr.push(obj[key] == obj["("]);
    }
    return !resultArr.includes(false);
  } else return false;
}

console.log(validBraces("()"));
console.log(String.fromCharCode(40))

// ASCII: '{'=123 | '}'=125 | '['=91 | ']'=93 | '('=40 | ')'=41 
