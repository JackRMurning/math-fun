require "minitest/autorun"
require "minitest/rg"
require "prime"
require_relative '../binomial_coefficient'

class TestBinomialCoefficient < MiniTest::Test
  def test_ruby_binomial_coefficient
    assert_equal(1, binomial_coefficient(1, 1))
  end
end
