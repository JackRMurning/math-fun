number = []
File.foreach("inputs_for_problems/project_e8.txt"){|line| number << line.chomp.split(//)}
number.flatten!
x = number.each_cons(13)
y = []
z = []
total = 1
x.each {|line| y << line if line.include?("0") == false }

for line in y
  for number in line
    total *= number.to_i
  end
  z << total
  total = 1
end
p z.max
