def maxnumber(nums):
     max=nums[0]
     for i in range(1, len(nums)):
        if nums[i]> max:
            max=nums[i]
     return max

print(maxnumber([7,6,6,3,4,2]))
print(max([7,6,6,3,4,2]))
