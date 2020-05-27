require "pry-byebug"

triangle = []
File.open("inputs_for_problems/project_e18.txt").each do |line|
  number_line = line.chomp.split()
  triangle << number_line.map { |number| number.to_i  }
end

def max_path_sum_alg(triangle_of_arrays)
  triangle_of_arrays.reverse!
  triangle_of_arrays.each do |line|
    current_index = triangle_of_arrays.find_index(line)
    line_index_length = line.length - 2
    (0..line_index_length).each do |number|
      result = [line[number], line[number + 1]].max
      triangle_of_arrays[current_index + 1][number] += result
    end
  end
  return triangle_of_arrays.reverse[0][0]
end

# max_path_sum_alg(triangle)

binding.pry
nil
