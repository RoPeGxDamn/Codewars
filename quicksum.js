function quicksum(packet) {
  const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let isValid = true;
  let init = 0;

  packet.split('').map(item => {
    console.log(item)
    if(alphabet.indexOf(item) == -1 && isValid) isValid = false 
  })
  return isValid ?  
  packet.split("").reduce((prev, curr, index) => {
    return (prev += (index + 1) * alphabet.indexOf(curr));
  }, init) : 0
}

function a(total, cur) {
  return total + cur;
}

console.log(quicksum("ac?fdsdddsFgfgfffA"));
