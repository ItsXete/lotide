function getObfuscatedChar(character) {
  if (character === "a") return "4";
  if (character === "e") return "3";
  if (character === "o") return "0";
  if (character === "l") return "1";
  return character;
}

function obfuscatePassword(password) {
  let obfuscated = "";

  for (let char of password) {
    obfuscated += getObfuscatedChar(char);
  }

  return obfuscated;
}

function printObfuscatedPassword(password) {
  console.log(obfuscatePassword(password));
}

const userInput = process.argv[2];
printObfuscatedPassword(userInput);