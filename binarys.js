//Binary Search.
function search(arr, target, start, end) {
  if (start > end) return false;
  console.log(arr.slice(start, end + 1));

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) return true; // Found the element.

  if (arr[middle] > target) {
    return search(arr, target, start, middle - 1);
  } else return search(arr, target, middle + 1, end);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const target = 15;
const result = search(arr, target, 0, arr.length - 1);
console.log(result);