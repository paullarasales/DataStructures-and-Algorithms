function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

}

let arr = ['a', 'b', 'c', 'd', 'e'];
reverseArray(arr);
console.log(arr);