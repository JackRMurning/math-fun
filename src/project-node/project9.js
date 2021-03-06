// DUN USING THEORY BRAH!

// prime factorisation
// fundamental theorem of arithmetic
// and m/n method for construction of primitive pythagorean triplets

// then you solve

// cN(N+M) = 500 for some N & M which are factors of the RHS

// c is a constant. N/M method only produces primitive pythagorean triplets so c is there incase you require a non primitive pi triplet. since RHS is small and the N/M method for small numbers will by nature require a small N. By inspection you can work out that c is 1.

// a = 375
// b = 200
// c = 425

// a + b + c = 1000

// and abc = 31875000

const pyTrip = (a, b, c) => {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
};

const specialPyTrip = () => {
  for (let a = 1; a < 997; a++) {
    for (let b = 2; b < 998; b++) {
      for (let c = 3; c < 999; c++) {
        if (a < b && b < c) {
          if (a + b + c === 1000 && pyTrip(a, b, c)) {
            return a * b * c;
          }
        }
      }
    }
  }
};

console.log(specialPyTrip());
