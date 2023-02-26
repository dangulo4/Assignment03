// DECLARE VARIABLES
let coinFlip;
let count = 0;

// CREATE COINFLIP AND LOOP THRU TO CHECK FOR HOW MANY TIMES THE RESULT IS HEADS, END IF THE COINFLIP IS TAILS
do {
  coinFlip = Math.round(Math.random());
  count++;
  if (coinFlip === 0) {
    coinFlip = 'Heads';
    console.log(`The coinflip was: ${coinFlip}`);
    console.log(`Your coinflip streak was: ${count}`);
  } else {
    coinFlip = 'Tails';
  }
} while (coinFlip === 'Tails');

console.log('Coinflip Strek has ended...');
