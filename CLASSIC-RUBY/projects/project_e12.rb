require "Prime"
require "Pry-byebug"

def triangle_number_gen(index_number)
  result = (index_number * (index_number + 1))/2
  return result
end

def prime_factors(number)
  result = Prime.prime_division(number)
  return result
end

def factor_count(prime_factors_array)
  total = 1
  result = prime_factors_array.each do |number|
    total *= number[1] + 1
  end
  return total
end

def integration()
  counter = 1
  factor_total = 0
  while factor_total < 500
    tnum = triangle_number_gen(counter)
    pfactors = prime_factors(tnum)
    factor_total = factor_count(pfactors)
    counter += 1
  end
  result = triangle_number_gen(counter - 1)
  return result
end

p integration()
