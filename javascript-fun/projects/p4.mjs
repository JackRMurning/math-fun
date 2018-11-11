const palindromeCheck = (start, end) => {
    const checkList = [];
    let startNumber = start**2;
    let endNumber = end**2;

    for (let i = endNumber; i >= startNumber; i--){
        checkList.push(i);
    }

    for (let number of checkList){
        console.log(number);
        
        const checkForm = number.toString().split('');
        const reverseCheckForm = number.toString().split('').reverse();
        if(checkForm === reverseCheckForm){
            return number;
        }
        
        
    }
}

// const a = ['1','0','2']
// const b = ['2', '0', '1']
// console.log(a === b);

console.log(palindromeCheck(10,99));



