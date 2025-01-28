const makeCounter = () => {
	let counter = 0;

	return () => {
		counter++;
		console.log(counter);
	}
}
const counter = makeCounter();
counter();
counter();
counter();
