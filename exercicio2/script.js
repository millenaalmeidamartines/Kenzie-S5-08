function incrementText(text) {
    let i = 0;
    let word = "";

    while (i < text.length) { // i < Backend
        word += text[i]; // "" = "" + B[0]a[1]c[2]...
        console.log(word); // B
        i++;
    }
}
incrementText("Backend");