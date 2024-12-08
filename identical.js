function identical(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				return true;
			}
		}
	}
	return false;
}

const arr = [1, 3, 4, 5, 6, 9];
console.log(identical(arr));

function effMethod(arr) {
	const seen = new Set();
	for (const num of arr) {
		if (seen.has(num)) {
			return true;
		}
		seen.add(num);
	}
	return false;
}

console.log(effMethod(arr));
