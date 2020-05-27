require "pry-byebug"

number = []
File.foreach("inputs_for_problems/project_e13.txt"){|line| number << line.chomp.split()}
number.flatten!

new_list = number.map { |number| number.to_i  }

result = new_list.reduce(:+)
answer = result.to_s[0..9].to_i


binding.pry
nil
