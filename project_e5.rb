a = [11, 13, 7, 2, 2, 2, 2, 17, 3, 3, 19, 5]
b = a.uniq
total = 1
x = b.map { |number| a.count(number)  }
p x.length
for n in (0..7).to_a
  total *= (b[n]**x[n])
end

p total
