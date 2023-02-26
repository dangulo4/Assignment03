// ITERATE FROM 1 TO 100
for (i = 1; i <= 100; i++) {
  // CHECK IF REMAINDER EQ 0 FOR MULTIPLES OF 3 AND 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('Marco! Polo!');
    // CHECK IF REMAINDER EQ 0 FOR MULTIPLES OF ONLY 3
  } else if (i % 3 == 0) {
    console.log('Marco!');
    //  CHECK IF REMAINDER EQ 0 FOR MULTIPLES OF ONLY 5
  } else if (i % 5 == 0) {
    console.log('Polo!');
  } else {
    console.log(i);
  }
}
