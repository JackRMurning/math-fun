const palindromeCheck = (start, end) => {
    
    const checkList = [];

    for(i = end; i >= start; i--){
        for(b = end; b >=start; b--){
            const number = i*b;
            checkList.push(number);
        }
    }

    checkList.sort(function(a, b){ return b - a });

    for (let number of checkList){
        const checkForm = number;
        const reverseCheckForm = parseInt(number.toString().split('').reverse().join(''));
        if(checkForm === reverseCheckForm){
            for(let a = 999; a >= 100; a--){
                if (checkForm % a === 0){
                    return checkForm
                }
            }
        }
    }
}

console.log(palindromeCheck(100,999));



