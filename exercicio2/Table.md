## Mapeamento
#
| Passo | Linha | i | word | Output |
| ------ | ------ | ------ | ------ | ------ |
| let i = 0 |  2 | 0 | "" | 
| let word = "" |  3 | 0 | "" |  
| i < Backend | 5 | 0 | "" | 
| word += text[i] | 6 | 0 | "B" | 
| console.log(word) | 7 | 0 | "B" |  "B"
| i++ | 8 | 1 | "B" | 
| i < Backend | 5 | 1 | "B" | 
| word += text[i] | 6 | 0+1 | "Ba" | 
| console.log(word) | 7 | 0+1 | "Ba" |  "Ba"
| i++ | 8 | 2 | "Ba" | 
| i < Backend | 5 | 2 | "Ba" | 
| word += text[i] | 6 | 0+1+2 | "Bac" | 
| console.log(word) | 7 | 0+1+2 | "Bac" |  "Bac"
| i++ | 8 | 3 | "Bac" | 
| i < Backend | 5 | 3 | "Bac" | 
| word += text[i] | 6 | 0+1+2+3 | "Back" | 
| console.log(word) | 7 | 0+1+2+3 | "Back" |  "Back"
| i++ | 8 | 4 | "Back" | 
| i < Backend | 5 | 4 | "Back" | 
| word += text[i] | 6 | 0+1+2+3+4 | "Backe" | 
| console.log(word) | 7 | 0+1+2+3+4 | "Backe" |  "Backe"
| i++ | 8 | 5 | "Backe" | 
| i < Backend | 5 | 5 | "Backe" | 
| word += text[i] | 6 | 0+1+2+3+4+5 | "Backen" | 
| console.log(word) | 7 | 0+1+2+3+4+5 | "Backen" |  "Backen"
| i++ | 8 | 6 | "Backen" | 
| i < Backend | 5 | 6 | "Backen" | 
| word += text[i] | 6 | 0+1+2+3+4+5+6 | "Backend" | 
| console.log(word) | 7 | 0+1+2+3+4+5+6 | "Backend" |  "Backend"
| i++ | 8 | 6 | "Backend" | 