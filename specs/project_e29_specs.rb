require "minitest/autorun"
require "minitest/rg"
require_relative('../projects/project_e29.rb')

class Test < MiniTest::Test
  def test_consecutive()
    assert_equal(15, consecutive_sequence_combination(2,5))
  end
end
