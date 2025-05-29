function mergeSort(array) {
  if (array.length === 0 || array.length === 1) return array;
  else {
    let leftHalf;
    let rightHalf;
    if (array.length % 2 === 0) {
      leftHalf = array.slice(0, array.length / 2);
      rightHalf = array.slice(array.length / 2, array.length);
    } else {
      leftHalf = array.slice(0, (array.length - 1) / 2);
      rightHalf = array.slice((array.length - 1) / 2, array.length);
    }

    let leftHalfSorted = mergeSort(leftHalf);
    let rightHalfSorted = mergeSort(rightHalf);

    function mergeArrays(arr1, arr2) {
      let newArray = [];

      while (!(arr1.length === 0 && arr2.length === 0)) {
        if (arr1[0] < arr2[0] || arr1[0] === arr2[0] || arr2[0] === undefined) {
          newArray.push(arr1.shift());
        } else if (arr1[0] > arr2[0] || arr1[0] === undefined) {
          newArray.push(arr2.shift());
        }
      }

      return newArray;
    }

    return mergeArrays(leftHalfSorted, rightHalfSorted);
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
