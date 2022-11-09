// ? Quick Sort
/**
 * Quick Sort using "Divide & Concer"; So you want to break down the list until you reach the Base Case..
 * ? What is the Base Case
 * Empty arr or arr with just one element.
 *
 * ! The performance of Quick Sort heavily depends on the pivot you choose.
 * Time Compexity:
 * * Worst Case - list is already sorted and you choose first/last element as a pivot => O(n) * O(n) =  O(n^2)
 * * Average Case - You choose a random element as a pivot => O(n) * O(log(n)) = O(nlog(n))
 */
function qSort1(list) {
  // Base Case
  if (list.length <= 1) return list;

  // Choose a random pivot
  let randomIdx = Math.floor(Math.random() * list.length),
    pivot = list[randomIdx];

  // Create 2 new sub-arrays
  let less = [],
    greater = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] == pivot) continue;

    list[i] > pivot ? greater.push(list[i]) : less.push(list[i]);
  }

  // ! We return a new array, So Quick Sort in "NOT In-place"
  return [...qSort1(less), pivot, ...qSort1(greater)];
}
qSort1([3, 5, 2, 1, 4]);

// TODO: Improve Quick Sort to be "In-place"
function qSort2(list, start = 0, end = list.length - 1) {
  // Base Case
  if (start >= end) return;

  // Use 2-pointer technique
  let i = start, // i => correct position of pivot
    j = start; // j => Loop through items

  // Choose pivot as last item
  let pivot = list[end];

  while (j < list.length - 1) {
    if (list[j] < pivot) {
      // swap..
      [list[i], list[j]] = [list[j], list[i]];
      i++;
    }
    j++;
  }
  // put pivot in its correct position
  [list[i], list[end]] = [list[end], list[i]];

  qSort2(list, start, i - 1);
  qSort2(list, i + 1, end);

  return list;
}
qSort2([8, 2, 9, 1, 6, 4]);

// TODO: Divide the above approach into 2 functions:
function partition(list, start = 0, end = list.length - 1) {
  // Use 2-pointer technique
  let i = start, // i => correct position of pivot
    j = start; // j => Loop through items

  // Choose pivot as last item
  let pivot = list[end];

  while (j < list.length - 1) {
    if (list[j] < pivot) {
      // swap..
      [list[i], list[j]] = [list[j], list[i]];
      i++;
    }
    j++;
  }
  // put pivot in its correct position
  [list[i], list[end]] = [list[end], list[i]];

  return i;
}

function qSort3(list, start = 0, end = list.length - 1) {
  if (start < end) {
    let pivotIdx = partition(list, start, end);

    qSort3(list, start, pivotIdx - 1);
    qSort3(list, pivotIdx + 1, end);
  }
  return list;
}
qSort3([8, 2, 9, 1, 6, 4]);
