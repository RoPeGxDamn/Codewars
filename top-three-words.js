function topThreeWords(text) {
  return Object.entries(
    text
      .trim()
      .split(/[:;\s,.//]/)
      .filter((i) => i != "" && i != "'")
      .map((i) => i.toLowerCase())
      .reduce((acc, v) => {
        acc[v] = acc[v] ? ++acc[v] : 1;
        return acc;
      }, {})
  )
    .sort(([, a], [, b]) => b - a)
    .map(([v, j], i) => {
      if (i < 3) {
        return v;
      }
    })
    .slice(0, 3);
}

console.log(topThreeWords("  , e   .. "));

// doTest("a a a  b  c c  d d d d  e e e e e", ['e','d','a'])
//     doTest("a a a c b b", ['a','b','c'])
//     doTest("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e", ['e','ddd','aa'])
//     doTest("  //wont won't won't ", ["won't", "wont"])
//     doTest("  , e   .. ", ["e"])
//     doTest("  ...  ", [])
//     doTest("  '  ", [])
//     doTest(
