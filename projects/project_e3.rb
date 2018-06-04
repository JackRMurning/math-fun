require 'Prime'

def largest_prime_factor(number)
  prime_list = []
  sqrt_number = Math.sqrt(number).to_i
  Prime.each(sqrt_number) { |prime| prime_list << prime }
  prime_list.reverse!
  p prime_list.detect { |prime| number % prime == 0 }
end

largest_prime_factor(600_851_475_143)
