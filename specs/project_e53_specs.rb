require "minitest/autorun"
require "minitest/rg"

require_relative('../projects/project_e53')

class ProjectFiftyThreeTest < MiniTest::Test
  def test_combinatoric()
    assert_equal(10, combinatoric(3, 5))
  end
end
