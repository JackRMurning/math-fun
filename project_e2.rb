f = [1, 1]
a = 0
b = 1
x = 0
y = 0
while x <= 4000000
  x = f[a] + f[b]
  if x <= 4000000 && x % 2 == 0
    y += x
  end
  f << x
  a += 1
  b += 1
end

puts y 
