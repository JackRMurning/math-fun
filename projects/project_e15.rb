def lattice_paths_grid(m, n)
  x = m + n
  binomial_coefficient = ((1..x).reduce(:*))/((((1..(x-n))).reduce(:*))*((1..n).reduce(:*)))
  return binomial_coefficient
end

p lattice_paths_grid(20, 20)
