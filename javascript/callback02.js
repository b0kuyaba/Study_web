function repeat(num, print) {
  print(num);
}

function printNumber(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i}번 실행`);
  }
}

repeat(3, printNumber);
