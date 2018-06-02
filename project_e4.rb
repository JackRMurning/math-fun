def palindrome_list(start_point, end_point)
  num = (start_point..end_point).to_a.reverse!
  palindrome_numbers_check = []
  num.each { |number| palindrome_numbers_check << number if number.to_s == number.to_s.reverse }
  palindrome_numbers_check
end

def palindrome(start_point, end_point)
  check_list = (start_point..end_point).to_a.reverse!
  start_point *= start_point
  end_point *= end_point
  real_list = palindrome_list(start_point, end_point)
  for palindrome in real_list
    for number in check_list
      if palindrome % number == 0 && (palindrome / number).to_s.length == 3
        return p palindrome
        break
      end
    end
  end
end

palindrome(100, 999)
