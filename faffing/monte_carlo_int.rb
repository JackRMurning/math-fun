def func(x)
  return x*2
end


def monte_carlo_integral(a, b, point_count)
  rand_y = 0
  i = 0
  while i <= point_count
    rand_x = (b-a) * rand + a
    rand_y += func(rand_x)
    i += 1
  end
  res = (b - a) * (rand_y / point_count)
end



p monte_carlo_integral(5, 10, 1_000_000_000)
