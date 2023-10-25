    // Write a function that gives us the longest length of a string.
function findMaxLength(arr) {
    let maxArr = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxArr) {
        maxArr = arr[i].length;
      }
    }
    return maxArr;
  }
  