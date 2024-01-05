function toCamelCase(str){
  return str.split(/[.,_-]/).map((v, i) => {
    if(i == 0) return v;
    else return String(v).charAt(0).toUpperCase() + String(v).slice(1)
  })
  .join('')
}

console.log(toCamelCase('a-Cat-is-kawaii'))