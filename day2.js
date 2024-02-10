//day 2 of learning datastructures and algorithms

function twoSum(nums, target) {

  //declare an empty object
  const numIndeces = {

  };

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    console.log(complement);

    if (numIndeces.hasOwnProperty(complement)) {
      return [numIndeces[complement], i];
    }

    numIndeces[nums[i]] = i;
  }
  return null; //if no solution found
}


const nums = [2, 5, 6, 7, 8];
const target = 9;

const result = twoSum(nums, target);
console.log("The indices are: ", result);
