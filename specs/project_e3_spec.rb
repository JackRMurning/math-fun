require "minitest/autorun"
require "minitest/rg"
require "prime"


require_relative('../project_e3.rb')

class TestProject3 < MiniTest::Test
  def test_largest_prime_factor
    assert_equal(29, largest_prime_factor(13195))
  end
end
