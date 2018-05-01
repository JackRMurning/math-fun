x = 0

for num in 1...1000
  if num % 3 == 0 || num % 5 == 0
    x += num
  end
end
print x
