require "Prime"
require "pry-byebug"

def quadratic_prime_fn(n ,a, b)
  result = n**2 + a*n + b
  return result
end

def consecutive_primes(a, b)
  n = 0
  prime = true
  while prime == true
    result = quadratic_prime_fn(n, a, b)
    prime = Prime.prime?(result)
    n +=1
  end
  result = n - 1
  return result
end

def longest_consecutive_prime(range)
  start = -range
  last = range
  max = 0
  num_a = 0
  num_b = 0
  (start..(last-1)).each do |a|
    (start..(last)).each do |b|
      # binding.pry
      result = consecutive_primes(a, b)
      if result > max
        num_a = a
        num_b = b
        max = result
      end
    end
  end
  return num_a*num_b
end

p longest_consecutive_prime(1000)
