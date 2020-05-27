const pyTrip = (a,b,c) => {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c,2)
};

const specialPyTrip = () => {
    for(let a =1; a<997; a++) {
        for(let b=2;b<998; b++){
            for(let c= 3; c< 999; c++){
                if(a<b && b<c){
                    if(a+b+c ===1000 && pyTrip(a,b,c)){
                        return a*b*c;
                    }
                }
            }
        }
    }
}

console.log(specialPyTrip());

