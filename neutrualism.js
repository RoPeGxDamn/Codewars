function neutralise(s1, s2) {
    return s1.split('').map((v,i) => v == s2.charAt(i) ? v : 0).join('')
}

console.log(neutralise('--', '+-'));