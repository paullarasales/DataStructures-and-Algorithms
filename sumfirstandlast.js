function sumFirstAndLast(arr) {
    if (arr.length === 0) {
        return 0;
    }
     
    if (arr.length === 1) {
        return arr[0];
    }

    let sum = arr[0] + arr[arr.length - 1];
    return sum;
}

const arr = [1, 2, 4, 5];
console.log(sumFirstAndLast(arr));