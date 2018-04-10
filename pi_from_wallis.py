def pi_from_wallis(x):
    p = 2.0
    for i in range(1, x+1):
        i = float(i)
        q = (4*(i**2))/(4*(i**2)-1)
        p = p*q
    print(p)


