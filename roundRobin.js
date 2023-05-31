// Scheduling (Round-Robin)
// https://www.codewars.com/kata/550cb646b9e7b565d600048a/javascript


function roundRobin(jobs, slice, index){
  const arr = [...jobs]
  let item = slice;
  let circles = 0;
  let i = 0;
  while (true) {
    if (arr[i] === 0) {
      arr[i]
    }
    else if (arr[i] > item) {
      arr[i] = arr[i] - item
      circles = circles + item
      item = slice
    } else if (arr[i] < item) {
      circles = circles +  arr[i]
      item =  slice
      arr[i] = 0
    } else {
      arr[i] = 0;
      circles = circles + item;
      item = slice
    }
    if (arr[i] === 0 && i == index) {
      break;
    }
    if (i === arr.length - 1) {
      i = 0
    } else {
      i++
    }
  }
  return circles;
}
