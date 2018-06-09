require "minitest/autorun"
require "minitest/rg"
require_relative('../projects/project_e12.rb')

class TestProjectE12 < MiniTest::Test

  def test_triangle__number_gen()
    assert_equal(28, triangle_number_gen(7))
  end

  def test_prime_divs()
    assert_equal(5, prime_divs(688).length)
  end

  def test_group_divisors()
    assert_equal(2, group_divisors(688).length)
  end

  def test_number_of_divisors()
    assert_equal(6, number_of_divisors(28))
  end
end
