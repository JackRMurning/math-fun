def factorial(number)
  return "Input less than 0" if number < 0
  number = 1 if number == 0
  result = (1..number).reduce(:*)
  return result
end
