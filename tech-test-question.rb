def intSolution(numbers)
  numbers.uniq!
  numbers.delete_if{|number| number < 1}
  numbers.sort!
  return 1 if numbers.empty?
  counter = 1
  numbers.each do |number|
     counter += 1 if numbers.include?(counter)
  end
     return counter
end

a = [-1, -2, -3, 4]

p intSolution(a)
