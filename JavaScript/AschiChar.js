function AschiChar(arr){
    for(let i=0; i<arr.length; i++){
        let ch= arr[i]
        if(ch>="0" && ch<="9") continue
        if(ch>="a" && ch<="z") continue
        if(ch>="A" && ch<="Z") continue
        return false
    }
    return true
}
console.log(AschiChar("kjsdfhjkdshfiorwqi432985239@"))