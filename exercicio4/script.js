function padEnd(word, repetitions, character) {
    let result = word;
    while (result.length < word.length + repetitions) {
      result += character;
    }
    return result;
  }
  
  console.log(padEnd("Kenzie", 5, "foo"));
  console.log(padEnd("Kata", 8, "*"));