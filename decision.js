let num = 1;
let sum = 0;

for (let i = 1; i < 11; i++) {
  sum += i;
}

console.log(sum);

function factorial(num) {
  let product = 1;
  for (let i = num; i >= 1; --i) {
    product *= i;
  }

  return product;
}

console.log(factorial(5));

//Fibonacci Sequence
function fibo(n) {
  let firstTerm = 0;
  let secondTerm = 1;

  for (let i = 1; i <= n; ++i) {
    let nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = firstTerm;
  }

  return n;
}

console.log(fibo(5));
