function sumArray(arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
	
	return sum;
}
const array = [10, -10, 5, -5];
console.log(sumArray(array));

