require "minitest/autorun"
require "minitest/rg"
require_relative('../projects/project_e12.rb')

class TestProjectE12 < MiniTest::Test

  def test_factor_count()
    result = factor_count(7)
    assert_equal(28, result)
  end


end
