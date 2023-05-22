
// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836

export const findOdd = (xs: number[]): number => {
  const numberObj:{[key:number]: number} = {};
  xs.forEach(el => !numberObj[el] ? numberObj[el] = 1 : numberObj[el]++)
  for (let i in numberObj) {
    if (numberObj[i] % 2 !== 0) {
      return Number(i)
    }
  }
  return 0;
};
