def intSolution(numbers)
  numbers.sort!
  numbers.uniq!
  numbers.delete_if{|number| number < 1}
  return 1 if numbers.empty?
  counter = 1
  numbers.each do |number|
     counter += 1 if numbers.include?(counter)
  end
     return counter
end

p intSolution(a)
