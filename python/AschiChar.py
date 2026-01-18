def Aschichar(arr):
    for ch in arr:
        if "0"<=ch<="9":
            continue
        if "a"<=ch<="z":
            continue
        if "A"<=ch<="Z":
            continue
        return False
    return True

print(Aschichar("jhdsjkaio3534@"))