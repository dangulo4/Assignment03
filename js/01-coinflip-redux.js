// DECLARE VARIABLE
let coinFlip;
let numberOfTimes = parseInt(prompt('Enter the number of flips'));

// CREATE FOR LOOP FOR N NUMBER OF TIMES
for (let i = 0; i < numberOfTimes; i++) {
  coinFlip = Math.round(Math.random());
  if (coinFlip === 0) {
    console.log(`Coinflip = ${coinFlip} - Heads`);
  } else {
    console.log(`Coinflip = ${coinFlip} - Tails`);
  }
}
