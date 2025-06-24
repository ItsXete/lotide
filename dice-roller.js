const numberOfDice = Number(process.argv[2]);

function rollDice() {
  return Math.floor(Math.random() *6) + 1;
}

const results = [];

for (let i = 0; i < numberOfDice; i++) {
  results.push(rollDice());
}

console.log(`Rolled ${numberOfDice} dice: ${results.join(', ')}`);
