require "pry-byebug"
grid = []

File.open("inputs_for_problems/project_e11.txt").each do |line|
  number_line = line.chomp.split()
  grid << number_line.map { |number| number.to_i  }
end

def horizontal_product(array)
  result_array = []
  array.each do |line|
    (0..16).each { |number| result_array << line[number] * line[number+1] * line[number + 2] * line[number + 3]  }
  end
  return  result_array.max
end

def vertical_product(array)
  result_array = []
  (0..19).each do |number|
    (0..16).each { |number2| result_array << array[number2][number] * array[number2+1][number] * array[number2+2][number] * array[number2+3][number]}
  end
  return result_array.max
end

def diagonal_product(array)
  result_array = []
  (0..16).each do |number1|
    (0..16).each {|number2| result_array << array[number1][number2] * array[number1+1][number2+1] * array[number1+2][number2+2] * array[number1+3][number2+3]
     }
   end
   return result_array.max
end

def array_reverse(array)
  array_reverse = array.each { |line| line.reverse!  }
  return array_reverse
end

def grid_integration(array)
  p horizontal_product(array)
  p vertical_product(array)
  p diagonal_product(array)
  p diagonal_product(array_reverse(array))
end


binding.pry
nil
