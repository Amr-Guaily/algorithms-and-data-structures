// ? Bubble Sort
/**
 * Compares 2-adjacent elements and swap them if it's required.
 * At the end of each iteration, the next largest element moves to its correct position.
 * Time Compexity:
 * * Worst Case - sorted in reversed order => O(n^2)
 * * Best Case - sorted in correct order => O(n)
 */
function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i; j++) {
      if (list[j] > list[j + 1]) {
        // Sawap
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        // Or (ES6)
        // [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list;
}
bubbleSort([2, 1, 3, 6, 4, -6]);

// Todo: Optimize Bubble Sort
// If The list is sorted or partially sorted => we won't execute unnecessary iteration.
function optimizBubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < list.length - i; j++) {
      if (list[j] > list[j + 1]) {
        isSorted = false;
        // Swap
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
    if (isSorted) return list;
  }
}
optimizBubbleSort([1, 2, 3, 4, 5]);
