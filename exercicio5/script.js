function subString(word, start, end) {
    let i = start + 1;
    let sub = "";
    while (i < end) {
        sub += word[i];
        i++;
    }
    return sub;
}

console.log(subString("Mozilla", 0, 4));
console.log(subString("Chrome", 3, 5));