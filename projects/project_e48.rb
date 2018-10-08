def self_power(number)
   return number ** number
end

def self_power_series(length)
    return (1..length).map{|num| self_power(num)}
end

def self_power_series_sum(length)
    return self_power_series(length).reduce(:+)
end

def last_n_digits(number, ndigits)
    numberStr = number.to_s()
    newNumStr = ''
    reverse_order = (1..ndigits).to_a().reverse! 
    reverse_order.each do |num|
        newNumStr << numberStr[(-1*num)]
    end
    return newNumStr.to_i()
end

def e48fn(length, nofdigits)
    number = self_power_series_sum(length)
    return last_n_digits(number, nofdigits)
end
