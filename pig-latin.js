const args = process.argv.slice(2);

let result= "";

for (const word of args) {
  if (word.length > 0) {
    const pigLatinWord = word.slice(1) + word[0] + "ay";
    result += pigLatinWord + " ";
  } 
}
console.log(result.trim());