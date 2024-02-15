function factorial(n) {
  let product = 1;
  if (!n == 0) {
    for(let i = 1; i <= n; i++) {
      product *= i;
    }
  } else {
    return 0;
  }

  return product;
  
}

console.log(factorial(3));
