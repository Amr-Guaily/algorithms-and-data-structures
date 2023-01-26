//? 283. Move Zeroes
// Move 0's to the end of the array. EX:[0,1,0,3,12] -- Output: [1,3,12,0,0]
function moveZeros(nums) {
    let p = 0;
    for (let i in nums) {
        if (nums[i] != 0) {
            // swap
            [nums[i], nums[p]] = [nums[p], nums[i]];
            p++;
        }
    }
    return nums;
}

// ************* ################### *************

//? 167. Two Sum II - Input Array Is Sorted
/**
 * Given a sorted arr (non-decreasing order).
 * Find two numbers such that they add up to a specific target.
 * Return the indices of the two numbers - added by one - as an integer array.
 * EX: [2,7,11,15], target = 9 -- Output: [1,2]
 * Notes: 1- the tests are generated such that there is exactly one solution..
 */
function twoSum(numbers, target) {
    let start = 0,
        end = numbers.length - 1;

    while (end >= start) {
        if (numbers[start] + numbers[end] == target) return [start + 1, end + 1];

        if (numbers[start] + numbers[end] > target) end--;

        if (numbers[start] + numbers[end] < target) start++;
    }

    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));