require "pry-byebug"

triangle = []
File.open("inputs_for_problems/project_e18.txt").each do |line|
  number_line = line.chomp.split()
  triangle << number_line.map { |number| number.to_i  }
end

binding.pry
nil
