function vowelconsonent(str){
     let vowels=0
        let consonent=0
    
    for(let i=0; i<str.length; i++){
       
        let ch=str[i]
        if(ch==="a" || ch==="e"|| ch==="i" || ch==="o" || ch==="u"){
            vowels++
        }
        else consonent++
    }
    return {vowels, consonent}
}
console.log(vowelconsonent("hjdhjskafidfdweo"))