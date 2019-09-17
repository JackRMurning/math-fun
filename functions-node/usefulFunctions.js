const factorize = (number, checkList, factorArray = []) => {
    
    if (checkList.includes(number)) { 
        factorArray.push(number)
        return factorArray
    } else if (number < checkList[0]){
        return factorArray
    };
    
    let factor
    
    for (let i of checkList) {
        if (number % i === 0) {
            factor = i
            break
        }
    }
    
    if (factor){
    
        factorArray.push(factor)
    
    return factorize(number / factor, checkList, factorArray)
    }
    return factorArray
}

module.exports.factorize = factorize;