require "minitest/autorun"
require "minitest/rg"
require_relative('../factorial')

class FactorialTest < MiniTest::Test
  def test_factorial_at_zero()
    assert_equal(1, factorial(0))
  end

  def test_factorial_on_negative()
    assert_equal("Input less than 0", factorial(-2))
  end
end
