require "pry-byebug"

def chain_length(number)
  counter = 0
  while number > 1
    if number.even?
      number /= 2
      counter += 1
    end
    if number.odd? && number > 1
      number = (3*number) + 1
      counter +=1
    end
  end
  return counter += 1
end

def collatz_chain(number)
  result = (1..number).map{|num| chain_length(num)}
  maxNum = result.max()
  return result.find_index(maxNum) + 1
end

binding.pry
nil
