function Palindrome(arr){
    let left=0
    let right=arr.length-1

    while(left< right){
        if(arr[left] !== arr[right]){
            return false
        }
        left++
        right --
        
    }
    return true
}
console.log(Palindrome("121213"))