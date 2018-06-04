def sum_of_square(start_number, end_number)
  (start_number..end_number).sum {|number| number ** 2}
end

def square_of_sum(start_number, end_number)
  (start_number..end_number).sum ** 2
end

def sum_square_difference(start_number, end_number)
  square_of_sum(start_number, end_number) - sum_of_square(start_number, end_number)
end

p sum_square_difference(1,100)
