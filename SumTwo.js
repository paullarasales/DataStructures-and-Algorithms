const nums = [2, 7, 11, 15];

function twoSum(target, nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

function faster(target, nums) {
    const numberToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        numberToIndex[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        const numberNeeded = target - nums[i];

        if (numberToIndex[numberNeeded] !== undefined && numberToIndex[numberNeeded] !== i) {
            return [i, numberToIndex[numberNeeded]];
        }
    }
}

console.log(faster(9, nums));

console.log(twoSum(9, nums));