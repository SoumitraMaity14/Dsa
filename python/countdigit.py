def countdigitletter(arr):
    digit=0
    letter=0
    for i in arr:
        if "0"<=i<="9":
            digit+=1
        elif ("a"<=i<="z") or ("A"<=i<="Z"):
            letter+=1
    return {digit, letter}
print(countdigitletter("hjgdasfjkiorqrbcxnzqotre53453463ak"))