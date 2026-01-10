function AccendingSort(n){

    let arr=n.length
    for(i=0; i<arr; i++){
        for(j=0; j<arr-1-i; j++){
            if(n[j]> n[j+1]){
                let temp=n[j]
                n[j]=n[j+1]
                n[j+1]=temp
            }
        }
    }
    return n
}
console.log(AccendingSort([5,6,4,3,8,2,9]))