sequence = Array.new(1001){|i| i.to_i}
total = 0
sequence.each { |n| total += n if n % 3 == 0 || n % 5 ==0 }
p total
