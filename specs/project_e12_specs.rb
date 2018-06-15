require "minitest/autorun"
require "minitest/rg"
require_relative('../projects/project_e12.rb')

class TestProjectE12 < MiniTest::Test

  def test_triangle_number()
    assert_equal(28, triangle_number(7))
  end

  def test_triangle_list()
    result = [1, 3, 6, 10, 15, 21, 28]
    assert_equal(result, triangle_list(7))
  end

  def test_prime_factors()
    result = [2, 2, 7]
    @prime_checklist = prime_list(500)
    assert_equal(result, prime_factors(28))
  end

  def test_divisor_group()
    result = divisor_group([2, 2, 7])
    assert_equal(2, result[2])
  end

  def test_divisor_count()
    divHash = divisor_group([2, 2, 7])
    result = divisor_count(divHash)
    assert_equal(6, result)
  end

end
