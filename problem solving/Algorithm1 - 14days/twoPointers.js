//? 977. Squares of a Sorted Array
/**
 * Given: a sorted array.
 * Return an array of the squares of each number sorted in non-decreasing order.
 * Ex: [-4,-1,0,3,10] --- Output: [0,1,9,16,100]
 */
function sortedSquares(nums) {
    for (let i in nums) {
        nums[i] = Math.pow(nums[i], 2);
    }

    // The sort() method sorts the elements of an array "IN-PLACE"
    return nums.sort((a, b) => a - b);
}
// TODO: using 2-pointer teqnique
function sortedSquares2(nums) {
    const result = [];

    let start = 0,
        end = nums.length - 1;

    for (let i = end; i >= 0; i--) {
        let startSqr = Math.pow(nums[start], 2),
            endSqr = Math.pow(nums[end], 2);

        if (endSqr >= startSqr) {
            result[i] = endSqr;
            end--;
        } else {
            result[i] = startSqr;
            start++;
        }
    }

    return result;
}

// ************* ################### *************

//? 189. Rotate Array
/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * EX: [1,2,3,4,5,6,7], k=3 --- Output: [5,6,7,1,2,3,4]
 */
function rotate(nums, k) {
    for (let i = k - 1; i >= 0; i--) {
        nums.unshift(nums.pop());
    }
    return nums;
}
// TODO: using 2-pointer teqnique
function rotate2(nums, k) {
    if (k == nums.length) return nums;

    if (k > nums.length) k %= nums.length;

    let start = 0,
        end = nums.length - 1;


    reverse(nums, start, end);

    reverse(nums, 0, k - 1);

    reverse(nums, k, end);

    return nums;
}
function reverse(list, start, end) {
    while (end >= start) {
        // swap
        [list[end], list[start]] = [list[start], list[end]];
        start++;
        end--;
    }
    return list;
}
