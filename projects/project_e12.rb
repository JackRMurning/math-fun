require "Prime"
require "pry-byebug"

def triangle_number(number)
  result =  (number*(number + 1)) / 2
  return result
end

def triangle_list(list_length)
  result = (1..list_length).map { |n| triangle_number(n)  }
  return result
end



def prime_factors(number)
  prime_divisors = []
  prime_checklist = []
  Prime.each(number) do |prime|
    prime_checklist << prime
  end
  while prime_checklist.include?(number) == false
      prime_checklist.each do |prime|
        if number % prime == 0
          prime_divisors << prime
          number /= prime
        end
    end
  end
  prime_divisors << number
  return prime_divisors.sort
end
