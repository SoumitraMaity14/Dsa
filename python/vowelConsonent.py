def vowelConsonent(str):
    vowels=0
    consonent=0
    for i in str:
        if i in "aeiou":
            vowels+=1
        else:
            consonent+=1
    return vowels, consonent

print(vowelConsonent("jsdbaksodwrhkncz"))
    