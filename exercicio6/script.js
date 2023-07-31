function stringRepeater(word, repetition) {
    let i = 0;
    let newString = "";
    while (i < repetition) {
        newString += word;
        i++;
    }
    return newString;
}
console.log(stringRepeater("Because I'm happy. ", 3));