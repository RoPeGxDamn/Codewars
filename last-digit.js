var lastDigit = function(str1, str2){  
    if(+str2 == 0) return 1
    let patternArr = []
    let firstEntrance = null
    let num1 = +str1.slice(-2);
    for (let i = 1; i <= 10; i++) {
        let item = +String(Math.pow(num1, i)).slice(-1);
        if(firstEntrance == item) break;
        if(i == 1) firstEntrance = item;
        patternArr.push(item) 
    } 
    console.log(patternArr)
    let num = +str2.slice(-2);
    let res = num % patternArr.length;
    let index = res == 0 ? patternArr.length - 1 : res - 1; 
    return patternArr[index]
  }

  console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"))

// 2 4 8 16 32 64 128 
// 3 9 27 81 243 
// 4 16 64 256
// "1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"