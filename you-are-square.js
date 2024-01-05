var isSquare = function(n){
  return !isNaN(Math.sqrt(n)) && String(Math.sqrt(n)).split('.').length != 2
}

console.log(isSquare(25))