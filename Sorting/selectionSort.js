// ? Selection Sort
// Select the smallest element in each iteration, and places it at the begining.
// Time Complexity: O(n^2) in all Cases
function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let smallest = list[i],
      smallestIdx = i;
    for (let j = i; j < list.length; j++) {
      if (list[j] < smallest) {
        smallest = list[j];
        smallestIdx = j;
      }
    }
    [list[i], list[smallestIdx]] = [list[smallestIdx], list[i]];
  }
  return list;
}
selectionSort([2, 1, 3, 6, 4, -6]);
