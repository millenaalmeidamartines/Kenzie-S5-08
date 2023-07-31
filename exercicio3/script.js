function incrementTextBackwards(text) {
    let index = text.length - 1; // ultima letra da string 

    while (index >= 0) { 
        let reversedStr = "";
        for (let i = index; i < text.length; i++) {
            reversedStr += text[i];
        }
        console.log(reversedStr);
        index--;
    }
}
incrementTextBackwards("Fullstack");