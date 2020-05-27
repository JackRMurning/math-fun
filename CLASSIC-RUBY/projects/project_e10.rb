require "Prime"

psum = 0
Prime.each(2_000_000) do |prime|
  psum += prime
end

p psum
