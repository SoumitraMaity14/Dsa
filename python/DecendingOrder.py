def DecendingOrder(arr):
    n=len(arr)
    for i in range(n):
        for j in range(n-1-i):
            if arr[j+1]> arr[j]:
                arr[j], arr[j+1]=arr[j+1], arr[j]
    return arr
print(DecendingOrder([3,4,6,2,2,6,2]))