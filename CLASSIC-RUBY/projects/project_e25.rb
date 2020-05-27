fib_sequence = [1, 1, 2]
fib_sequence << fib_sequence.last(2).sum while fib_sequence.last.digits.length < 1_000
result = fib_sequence.last
p fib_sequence.find_index(result) + 1
