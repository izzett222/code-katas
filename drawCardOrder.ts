// Playing Cards Draw Order – Part 2
// https://www.codewars.com/kata/6311b2ce73f648002577f04a/train/typescript

import { printDeck } from "./preloaded";

export const prepareDeck = (drawnCards: string[], isOddLength?:boolean): string[] => {
	printDeck(drawnCards, true); // Using unicode characters
	printDeck(drawnCards, false); // Using regular characters
  if (drawnCards.length == 2 && isOddLength) {
    return [drawnCards[1], drawnCards[0]]
  } 
  if (drawnCards.length == 2 && !isOddLength) {
    return drawnCards
  }
  if (drawnCards.length < 2) {
    return drawnCards
  }
	const deck: string[] = [];
  
  const oddItem = drawnCards.slice(0, Math.ceil(drawnCards.length / 2))
  const result = Array(drawnCards.length).fill(0)
  const evenItem = drawnCards.slice(Math.ceil(drawnCards.length / 2))
  result.forEach((el, i, arr) => {
    if ((i + 1) % 2 !== 0) {
          arr[i] = oddItem[Math.floor(i / 2)]
    }
  })
  const preparedEven = prepareDeck(evenItem, isOddLength == undefined ? drawnCards.length % 2 !== 0 : isOddLength)
  result.forEach((el, i, arr) => {
    if ((i + 1) % 2 === 0) {
          arr[i] = preparedEven[Math.floor(i / 2)]
    }
  })
  return result
};
