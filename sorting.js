function sortNum(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
        console.log(arr);
      }
    }
  }

  return arr;
}

let myArr = [5, 3, 1, 4, 2];
console.log("Not Sorted: " + myArr);

console.log("Sorted array: " + sortNum(myArr));
