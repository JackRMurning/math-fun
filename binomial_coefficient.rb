# A binomial coefficient generator using ruby reduce enumerator.
require_relative 'useful_methods/factorial'
def binomial_coefficient(n, k)
  n_subtract_k = n - k
  # n_subtract_k = 1 if n_subtract_k == 0
  # n = 1 if n == 0
  # k = 1 if k == 0
  # numerator = (1..n).reduce(:*)
  # denominator = (1..k).reduce(:*) * (1..(n_subtract_k)).reduce(:*)
  numerator = factorial(n)
  denominator = factorial(k) * factorial(n_subtract_k)
  coefficient = numerator / denominator
  return coefficient
end
