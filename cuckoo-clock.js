function cuckooClock(inputTime, chimes) {
  const currentTime = new Date();
  let [hours, minutes] = String(inputTime).includes(":")
    ? inputTime.split(":")
    : "";
  const isValidHH = +hours >= 1 && +hours <= 12;
  const isValidMM = +minutes >= 0 && +minutes <= 59;
  const isValidN = +chimes >= 1 && +chimes <= 200;
  let isFirstItem = true;
  if (isValidHH && isValidMM && isValidN) {
    for (let h = +hours; h <= 12; h++) {
        console.log(h)
      for (let m = +minutes; m <= 60; m += 15) {
        console.log(m)
        let num = m / 15;
        console.log(num)
        if (num == 0) {
            chimes -= h;
        }
        else if (num <= 1) {
            m = 15
            chimes--;
        }
        else if (num <= 2) {
            m = 30
            chimes--;
        }
        else if (num <= 3) {
            m = 45
            chimes--;
        }
        else if(num <= 4) {
            minutes = 0;
            if(h == 12) {
                h = 0;
            }
            break;
        }
        currentTime.setHours(h, m);
        console.log(currentTime.toTimeString().split(':').splice(0,2).join(":"));
        console.log("chimes: ", chimes)
        if(chimes <= 0) {
            currentTime.setHours(h, m);
            return currentTime.toTimeString().split(':').splice(0,2).join(":");
        }

      }
      isFirstItem = false;
    }
}
}

console.log(cuckooClock("09:53", 50));


