def SumArray(nums):
    total=0
    for i in range(len(nums)):
        total+=nums[i]
    return total

print(SumArray([2,3,4,5,6]))

print(sum([3,4,5,6,7]))