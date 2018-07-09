require "Pry-Byebug"
require_relative('binomial_coefficient')

def pascals_triangle(number_of_rows)
  number_of_rows -=1
  triangle = []

  (0..number_of_rows).each do |number|
    triangle << []
    (0..number).each do |number2|
      triangle[number] << binomial_coefficient(number, number2)
    end
  end
  return triangle
end

p pascals_triangle(6)
