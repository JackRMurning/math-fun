require "pry-byebug"

def factorial_digit_sum(number)
  result = (1..number).reduce(:*)
  return result.digits.reduce(:+)
end
