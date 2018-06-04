fib_sequence = [1, 2]
fib_sequence << fib_sequence.last(2).sum while fib_sequence.last <= 4_000_000
fib_sequence.delete_if{ |num| num.odd?}
p fib_sequence.sum
