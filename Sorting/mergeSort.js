// ? Merge Sort
/**
 * Merge Sort using "Divide & Concer"; So you want to divide the list until you reach the Base Case..
 * ? What is the Base Case
 * Empty arr or arr with just one element.
 *
 * Time Compexity:
 * * Merge Sort is always O(nlog(n))
 *
 * ! Merge Sort in "NOT In-place"
 */
function mergeSort(list) {
  // Base Case
  if (list.length <= 1) return list;

  let mid = Math.floor(list.length / 2),
    left = list.slice(0, mid),
    right = list.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
// Merge 2 sorted sub-arrays in new array..
function merge(left, right) {
  let sortedArr = [];

  // Use 2 Pointers
  let i = 0, // left index
    j = 0; // right index

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      sortedArr.push(right[j]);
      j++;
    } else {
      sortedArr.push(left[i]);
      i++;
    }
  }

  return sortedArr.concat(left.slice(i), right.slice(j));
}
mergeSort([38, 27, 43, 3, 9, 82, 10]); // [ 3, 9, 10, 27, 38, 43, 82 ]

// TODO: Improve Merge Sort to be "In-place"
function mergeSort2(list) {
  if (list.length <= 1) return list;

  let mid = Math.floor(list.length / 2),
    left = list.slice(0, mid),
    right = list.slice(mid);

  return merge2(list, mergeSort2(left), mergeSort2(right));
}
function merge2(list, left, right) {
  let i = 0, // left idx
    j = 0, // right idx
    k = 0; // list idx

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      list[k] = left[i];
      i++;
    } else {
      list[k] = right[j];
      j++;
    }
    k++;
  }

  // Add the rest of left sub-array
  while (i < left.length) {
    list[k] = left[i];
    i++;
    k++;
  }
  // Add the rest of right sub-array
  while (j < right.length) {
    list[k] = right[j];
    j++;
    k++;
  }

  return list;
}
console.log(mergeSort2([38, 27, 43, 3, 9, 82, 10]));
