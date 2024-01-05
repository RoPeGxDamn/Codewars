var whatTimeIsIt = function(angle) {
  let num = angle < 30 ? 360 + angle : angle; 
  console.log(num)
  console.log((389 * 2) / 60 )
  console.log(Math.trunc((num * 2) % 60))
  return `${strFormat(Math.trunc((num * 2) / 60))}:${strFormat(Math.trunc((num * 2) % 60))}`;
}

var strFormat = (value) => String(value).length == 1 ? `0${value}` : `${value}`

console.log(whatTimeIsIt(23.672873743623537))



