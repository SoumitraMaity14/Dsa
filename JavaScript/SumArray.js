function SumArr(nums){
    let sum=0
    for(i=0; i<nums.length; i++){
        sum=sum+nums[i]
    }
    return sum
}
console.log(SumArr([2,3,4,5]))

let arr=[3,4,5,6]
const arrsum=arr.reduce((total, nums)=>{return total=total+nums}, 0)

console.log(arrsum)