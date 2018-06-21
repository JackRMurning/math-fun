require "minitest/autorun"
require "minitest/rg"
require_relative('../projects/project_e27.rb')

class Test < MiniTest::Test
  def test_quadratice_prime()
    assert_equal(43, quadratic_prime_fn(1,1,41))
  end

  def test_consecutive_primes()
    assert_equal(40 , consecutive_primes(1, 41))
  end
end
