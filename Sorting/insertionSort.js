/**
 * ? Insertion Sort
 * Instead of "swaping" we shift all larger items to the rigth to open space for the correct item.
 * Time Complexity:
 * * Worst Case: O(n^2)
 * * Best Case: O(n)
 */
function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let curr = list[i],
      j = i - 1;
    while (list[j] > curr && j >= 0) {
      // Shift..
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = curr;
  }
  return list;
}

insertionSort([8, 2, 4, 1, 3]); // [1, 2, 3, 4, 8]
