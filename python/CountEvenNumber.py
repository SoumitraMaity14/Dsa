def CountEvenNumber(nums):
    count=0
    for i in range(len(nums)):
        if nums[i] %2 == 0:
            count=count+1
    return count

print(CountEvenNumber([3,4,5,6,7,2,4]))