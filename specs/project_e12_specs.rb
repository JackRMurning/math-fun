require "minitest/autorun"
require "minitest/rg"
require_relative('../projects/project_e12.rb')

class TestProjectE12 < MiniTest::Test

  def test_triangle__number_gen()
    assert_equal(28, triangle_number_gen(7))
  end
end
