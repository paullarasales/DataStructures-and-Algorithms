function missing(nums) {
  //find the expected sum
  const n = nums.length + 1; //since one number is missing
  const expectedSum = (n * (n + 1)) / 2;

  //find the actual sum
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

console.log(missing([1, 3, 4, 5, 6]));
