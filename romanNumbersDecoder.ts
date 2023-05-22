// Roman Numerals Decoder
// https://www.codewars.com/kata/51b6249c4612257ac0000005

export function solution(roman: string): number {
  const romans:{[key:string]: number} = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let result:number = 0;
  for (let i:number = 0; i < roman.length; i++) {
    if (romans[roman[i]] < romans[roman[i+1]] &&  i < roman.length - 1) {
      result = result - romans[roman[i]]
    } else {
      result = result + romans[roman[i]]
    }
  }
  
  return result
  
}
