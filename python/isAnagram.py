def isAnagram(s1, s2):
    if len(s1) != len(s2):
        return False
    freq={}
    for ch in s1:
        if ch in freq:

            freq[ch]+=1
        else:
            freq[ch]=1

    for ch in s2:
        if ch not in freq or freq[ch]==0:
            return False
    return True

print(isAnagram("fuck", "kucf"))
print(isAnagram("hello", "helli"))