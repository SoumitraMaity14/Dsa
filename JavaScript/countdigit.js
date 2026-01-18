function countdigit(arr){
    let digit=0
    let letter=0
    for(let i=0; i<arr.length;i++){
        let ch=arr[i]
        if(ch>="0" && ch<="9"){
            digit++
        }
        if(ch>="a" && ch<="z"){
            letter++
        }
        if(ch>="A" && ch<="Z"){
            letter++
        }
    }
    return {digit, letter}
}
console.log(countdigit("fhskjdkioe8457324"))