const args = process.argv.slice(2);

for (const word of args) {
  let reversed = "";


for (let i = word.length -1; i >= 0; i--) {
  reversed += word[i];
}

console.log(reversed);
}