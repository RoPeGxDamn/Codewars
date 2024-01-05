Array.prototype.sameStructureAs = function (other) {
    let a = this;
    let b = other;
    if(a.length != b.length) return false;
    if(!Array.isArray(a) || !Array.isArray(b)) return false
  
    const aLength = a.length;
    let isArray = Array.isArray;
  
    for (let i = 0; i < aLength; i++) {
      let aVal = a[i];
      let bVal = b[i];
  
      if (isArray(aVal) !== isArray(bVal)) {
        return false;
      }
      if (isArray(aVal) && isArray(bVal)) {
        let result = aVal.sameStructureAs(bVal);
  
        if (!result) return false;
      }
    }
    return true;
  }
  
  

console.log([[[], []]].sameStructureAs([[1, 1]]));
