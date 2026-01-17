function Isanagram(s1, s2) {
    let freq = {}
    if (s1.length !== s2.length) return false
    for (let ch of s1) {
        freq[ch] = (freq[ch] || 0) + 1
    }
    for (let ch of s2) {
        if (!freq[ch]) {
            return false
        } freq[ch]--
    }
    return true
}
console.log(Isanagram("good", "doog"))
console.log(Isanagram("hello", "world"))
