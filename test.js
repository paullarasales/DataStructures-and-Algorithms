const expect = function (val) {
	const comparingVal = val;

	return {
		toBe: function (val) {
			return val === comparingVal;
		},
		notToBe: function (val) {
			return val !== comparingVal ? "Not Equal" : "Equal";
		}
	}
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(4));