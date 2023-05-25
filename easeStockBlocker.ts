// Ease the StockBroker
// https://www.codewars.com/kata/54de3257f565801d96001200/typescript

export const balanceStatements = (strng:string):string => {
  if (strng.length < 1) {
    return "Buy: 0 Sell: 0"
  }
  const stocks = strng.split(",").map(el => el.trim())
  
  let stockTotal:[number, number] = [0, 0]
  let mistake:string[] = []
  stocks.forEach(el => {
    const stockProp = el.split(" ")
    const correctName = /^\S+$/.test(stockProp[0])
    const correctQuantity = /^\d+$/.test(stockProp[1])
    const correctPrice = /^\d*\.\d+$/.test(stockProp[2])
    const correctStatus = /[SB]/.test(stockProp[3])
    if (correctName && correctQuantity && correctPrice && correctStatus) {
       if (stockProp[3] === "B") stockTotal[0] += Number(stockProp[2]) * Number(stockProp[1])
       if (stockProp[3] === "S") stockTotal[1] += Number(stockProp[2]) * Number(stockProp[1])
    }  else {
      mistake.push(el)
    }
  })
  return `Buy: ${Math.round(stockTotal[0])} Sell: ${Math.round(stockTotal[1])}${mistake.length ? `; Badly formed ${mistake.length}: ${mistake.join(" ;")} ;` : ""}`

}
