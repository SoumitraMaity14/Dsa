function MinNumber(nums){
    let min=nums[0]
    for(let i=0; i<nums.length; i++){
        if(nums[i]<min){
            min=nums[i]
        }
    }
    return min
}

console.log(MinNumber([5,6,7,4,3,2]))

const minNumber=nums=>Math.min(...nums)
console.log(minNumber([6,7,8,3,4,2]))
