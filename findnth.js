function findPos(target) {
  let firstTerm = 0;
  let secondTerm = 1;
  let nextTerm;
  let position = 2;

  while (true) {
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;

    if (nextTerm === target) {
      return position;
    }
    position++;
  }
}

console.log(findPos(5));
