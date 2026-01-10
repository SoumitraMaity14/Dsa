def CountOddNumber(nums):
    count=0
    for i in range(len(nums)):
        if nums[i] % 2 != 0:
            count=count+1
    return count
print(CountOddNumber([1,2,3,4,5,5,6,6,8,7]))