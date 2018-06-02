require "minitest/autorun"
require "minitest/rg"
require_relative('../project_e6.rb')

class TestProject6 < MiniTest::Test
  def test_sum_of_square
    assert_equal(385, sum_of_square(1,10))
  end

  def test_square_of_sum
    assert_equal(3025, square_of_sum(1,10))
  end

  def test_sum_square_difference
    assert_equal(2640, sum_square_difference(1,10))
  end
end
