function findMax(arr) {
	let starting = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			if (arr[i] > starting) {
			 	starting = arr[i];
			}
		}
	}
	return starting;
}

const array = [2, 4, 5, 6, 9];
console.log(findMax(array));


