// PROMPT USER FOR NUMBER FOR COUNTDOWN
let countdown = parseInt(prompt('Enter a number for countdown: '));

// ITERATE FROM 0 TO USER COUNTDOWN
for (i = 0; i <= countdown; i++) {
  console.log(countdown - i); // LOG FROM COUNTDOWN TO 0
}
