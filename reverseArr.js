function reverse(arr) {
	let newArrayCon = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		newArrayCon.push(arr[i]);
	}
	return newArrayCon;
}
const array = [1, 2, 3, 4, 5];
console.log(reverse(array));
