function ReverseArray(arr){
    let left=0
    let right=arr.length-1
    while(right> left){
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp
        left++
        right--
    }
    return arr
}
console.log(ReverseArray([2,3,4,5,6,8]))