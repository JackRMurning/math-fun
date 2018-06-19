require "minitest/autorun"
require "minitest/rg"
require_relative('../projects/project_e14.rb')

class TestProjectE14 < MiniTest::Test

  def test_chain_length()
    result = chain_length(4)
    assert_equal(3, result)
  end

  def test_collatz_chain()
    result = collatz_chain(4)
    assert_equal(3, result)

  end


end
