# def ReverseArray(arr):
#     return arr[::-1]
# print(ReverseArray([3,4,5,6,7,8]))

def ReverseArray(arr):
    left=0
    right=len(arr)-1
    for i in range(len(arr)):
        if right > left:
            arr[left], arr[right]=arr[right], arr[left]
            left += left+1
            right -= right-1
    return arr
print(ReverseArray([2,3,4,5,6]))