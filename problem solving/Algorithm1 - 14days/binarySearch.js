// ? 704. Binary Search
function search(list, target) {
    let start = 0,
        end = list.length - 1;


    while (start <= end) {
        let mid = Math.floor((end + start) / 2),
            guess = list[mid];

        if (target == guess) return mid;

        if (guess < target) start = mid + 1;

        if (guess > target) end = mid - 1;
    }

    return -1;
}
function recursiveBinarySearch(list, target, start = 0, end = list.length - 1) {
    let mid = Math.floor((start + end) / 2),
        guess = list[mid];

    // Base Case
    if (guess == target) return mid;

    if (guess < target) return recursiveBinarySearch(list, target, mid + 1, end);

    if (guess > target) return recursiveBinarySearch(list, target, start, mid - 1);

    // If item not exist
    return -1;
}

// ************* ################### *************

// ? 35. Search Insert Position
/**
 * Given a sorted array and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order. 
*/
function searchInsert(list, target) {
    let start = 0,
        end = list.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2),
            guess = list[mid];

        if (guess == target) return mid;

        if (guess > target) end = mid - 1;

        if (guess < target) start = mid + 1;
    }

    return start;
}