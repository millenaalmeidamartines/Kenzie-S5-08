function stringCentralizer(word, repetition, element) {
  let i = 0;
  let centeredWord = word;
  while (i < repetition) {
    centeredWord = element + "" + centeredWord + "" + element;
    i++;
  }
  return centeredWord;
}

console.log(stringCentralizer("JavaScript", 8, "="));