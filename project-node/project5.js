const checkList = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const divisorCheck = number => {
    for (i of checkList){
        if (number % i != 0) {
            return false;
        }
    }
    return true;
};

let value = 2520 
let found

while(!found){
    found = divisorCheck(value);
    value++
}

console.log(value - 1)