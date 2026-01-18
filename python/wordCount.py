def wordCount(arr):
    arr=arr.lower().split(" ")
    freq={}
    for i in arr:
        if i in freq:
            freq[i]+=1
        else:
            freq[i]=1
    return freq

print(wordCount("this is this a a a fuck off"))

