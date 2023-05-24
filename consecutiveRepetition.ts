// Character with longest consecutive repetition
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/typescript

export function longestRepetition (text: string): [string, number] {
  const sortedMatches = text.match(/(.)\1*/g)?.sort((a, b) => b.length - a.length)
  return sortedMatches ? [sortedMatches[0][0], sortedMatches[0].length] : ["", 0]
}
