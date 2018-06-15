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
  while @prime_checklist.include?(number) == false
      @prime_checklist.each do |prime|
        if number % prime == 0
          prime_divisors << prime
          number /= prime
        end
    end
  end
  prime_divisors << number
  return prime_divisors.sort
end

def prime_list(number)
  prime_checklist = []
  Prime.each(number) do |prime|
    prime_checklist << prime
  end
  return prime_checklist
end

def divisor_group(pfactor_array)
  divisor_hash = pfactor_array.reduce(Hash.new(0)) { |a, b| a[b] += 1; a }
  return divisor_hash
end

def divisor_count(div_hash)
  count = 1
  div_hash.each_value {|value| count *= (value+1)}
  return count
end
