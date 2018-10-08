require "minitest/autorun"
require_relative('../projects/project_e48.rb')

class TestProject48 < MiniTest::Test
    def test_self_power
        assert_equal(27, self_power(3))
    end

    def test_self_power_series
        result = [1, 4, 27]
        assert_equal(result, self_power_series(3))
    end

    def test_self_power_series_sum
        result = 10405071317
        assert_equal(result, self_power_series_sum(10))
    end

    def test_last_n_digits
        result = 10
        assert_equal(result, last_n_digits(99910, 2))
    end
    
    def test_e48fn
        number = self_power_series_sum(1000)
        result = last_n_digits(number, 10)
        answer = 9110846700
        assert_equal(answer, result)
    end
end