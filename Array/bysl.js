function maxProfit(prices) {
    let maxProfit= 0
    for(let i=1;i<prices.length; i++){
       if(prices[i]>prices[i-1]){
        maxProfit += prices[i]- prices[i-1]
       } 
      
    }
    return maxProfit
}
//let prices=[7,1,5,3,6,4]
let prices=[1,5,3,8,12]

console.log(maxProfit(prices))