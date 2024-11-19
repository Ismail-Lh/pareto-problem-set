/**
 * Finds two numbers in the given array that add up to the target sum.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]|number} - An array containing the indices of the two numbers that add up to the target sum, or -1 if no such pair exists.
 */
function twoSum(nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const reminder = target - nums[i];

    if (numsMap[reminder] !== undefined) return [i, numsMap[reminder]];

    numsMap[nums[i]] = i;
  }

  return -1;
}

// Input: (nums = [2, 7, 11, 15]), (target = 9);
console.log(twoSum([2, 7, 11, 15], 9));
