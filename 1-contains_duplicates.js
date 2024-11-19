/**
 * Checks if the given array contains any duplicates.
 *
 * @param {number[]} nums - The array of numbers to check for duplicates.
 * @returns {boolean} - Returns true if there are duplicates, otherwise false.
 */
function containsDuplicates(nums) {
  if (nums.length <= 1) return false;

  const numsSet = new Set();

  for (const num of nums) {
    if (numsSet.has(num)) return true;

    numsSet.add(num);
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([1, 2, 3, 4]));
console.log(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
