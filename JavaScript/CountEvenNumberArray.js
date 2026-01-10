function CountArray(nums) {
    let count = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            count = count + 1
        }
    }
    return count
}
console.log(CountArray([3, 5, 6, 4, 3, 2]))