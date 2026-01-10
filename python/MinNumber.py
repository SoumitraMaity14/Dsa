def Minnumber(nums):
    min=nums[0]
    for i in range(1, len(nums)):
        if min > nums[i]:
            min=nums[i]
    return min

print(Minnumber([5,6,7,8,9,3,2])) 

print(min([4,6,3,5,2]))