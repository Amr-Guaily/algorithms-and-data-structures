// Time Complixity: O(log(n))
function binarySearch(list, target) {
  let start = 0,
    end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2),
      guess = list[mid];

    if (guess == target) return mid;

    if (guess > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // If the item doesn't exist
  return null;
}
binarySearch([1, 3, 5, 7, 9], 5);

//  -------------------------------------------------------------- ########## ---------------------------------------------------------------------

// TODO: Write Binary Search based on Divide & Concer technique..
function recursiveBinarySearch(list, target, start = 0, end = list.length - 1) {
  // Base-Case
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2),
    guess = list[mid];

  if (guess === target) return mid;

  if (guess > target)
    return recursiveBinarySearch(list, target, start, mid - 1);

  if (guess < target) return recursiveBinarySearch(list, target, mid + 1);
}
recursiveBinarySearch([1, 3, 5, 7, 9], 10);
