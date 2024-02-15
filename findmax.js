function findMax(arr) {
  let starting = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > starting) {
      starting = arr[i];
    }
  }

  return starting;
}

let max = [2, 4, 5, 6, 9];
console.log(findMax(max));
