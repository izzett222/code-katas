// Reverse Vowels In A String
// https://www.codewars.com/kata/585db3e8eec141ce9a00008f

function reverseVowels(str) {
    const arr = str.split("")
    const stack = []
    for (let i = 0; i < str.length; i++) {
      if ("aeoiu".includes(str[i].toLowerCase())) {
        stack.push(str[i])
        arr[i] = null
      }
    }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      arr[i] = stack.pop()
    }
  }
return arr.join("")
  
}
