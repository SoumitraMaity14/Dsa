function Maxnumber(nums){
    let max=nums[0]
    for (let i=0; i<nums.length; i++){
        if(nums[i]>max){
            max=nums[i]
        }
    }
    return max
}

console.log(Maxnumber([2,4,1]))

arr=[5,6,7,4,3]
const maxnumber=Math.max(...arr)
console.log(maxnumber)