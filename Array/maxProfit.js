function maxProfit(prices) {
    let maxProfit= 0
    let minPrice= Number.MAX_SAFE_INTEGER + 1;
    let diff=0
    for(let i=0;i<prices.length; i++){
        if(prices[i]<minPrice) minPrice= prices[i];
        diff= prices[i]- minPrice
       if(diff>maxProfit)  maxProfit=diff;
      
    }
    return maxProfit
}
//let prices=[7,1,5,3,6,4]
let prices=[1,5,2,8,12]

console.log(maxProfit(prices))