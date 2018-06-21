def consecutive_sequence_combination(start, endpoint)
  resultArray = []
    (start..endpoint).each do |num1|
      (start..endpoint).each do |num2|
        result = num1 ** num2
        resultArray << result
      end
    end
    return resultArray.uniq!.length
end

p consecutive_sequence_combination(2, 100)
