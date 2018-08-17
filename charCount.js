/*
1. Understand the problem
- inputs, outputs, inputs=>outputs?, what are the best labels?
2. Write out examples
- simple, complex, invalid, edge
3. Break down to chunks
- write out comments
4. Solve and/or simplify
- if something is hard, leave it out, comeback later
5. Refactor
- what is cleaner and faster?

*/

function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] > 0 ? obj[char]++ : (obj[char] = 1);
    }
  }
  return obj;
}

charCount("asdasd 12213");
