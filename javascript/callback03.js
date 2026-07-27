function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(num1, num2, callback) {
  console.log(callback(num1, num2));
}

calculate(10, 3, add); // 13
calculate(10, 3, multiply); // 30
