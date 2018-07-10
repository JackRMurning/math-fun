require_relative 'factorial'

def permutations(n, k)
  n_subtract_k = n - k
  numerator = factorial(n)
  denominator = factorial(n_subtract_k)
  return numerator/denominator
end

p permutations(19, 2)
