def combinatoric(r, n)
  combination = (1..n).reduce(:*) / (((1..r).reduce(:*))*((1..(n-r)).reduce(:*)))
  return combination
end

def project_e53(break_number)
  counter = 0
  (2..break_number).each do |number|
    choice_number = number - 1
    (1..choice_number).each do |number2|
      result = combinatoric(number2, number)
      counter +=1 if result > 1_000_000
    end
  end
  return counter
end

p project_e53(100)
