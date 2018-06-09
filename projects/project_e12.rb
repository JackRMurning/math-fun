require "Prime"
require "pry-byebug"

def triangle_number_gen(number)
  (1..number).reduce(:+)
end

def prime_divs(number)
  divisor_tracker = []
  number_sqrt = Math.sqrt(number).to_i
  prime_divisors = Prime.first(number_sqrt)
  while prime_divisors.include?(number) == false
      prime_divisors.each do |prime|
        if number % prime == 0
          divisor_tracker << prime
          number /= prime
        end
      end
  end
  divisor_tracker << number
  return divisor_tracker
end

def group_divisors(number)
  prime_divs(number).group_by {|number| number}.values
end

def number_of_divisors(number)
  numd = 1
  divisor_hash = group_divisors(number)
  divisor_hash.each {|pkey| numd *= pkey.length + 1 }
  return numd
end
