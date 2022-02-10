function buySell(arr){
    let size= arr.length
    let minPrice= 0
    let maxProfit=0
    for(let i=0;i<size; i++){
        if(arr[i]<minPrice){
            minPrice= arr[i]
        }
        let tempProfit= minPrice- arr[i]
        if(tempProfit> maxProfit){
            maxProfit= tempProfit
        }
        
    }
}