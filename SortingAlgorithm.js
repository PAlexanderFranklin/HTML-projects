function sortArray(arr, arrayLength) {
  while (arrayLength > 0) {
    var highValueIndex = 0;
    var swapped = false;
    for (var i = 0; i < arrayLength - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        arr.splice(i, 1, arr.splice(i + 1, 1, arr[i])[0]);
        swapped = true;
      }
      if (arr[i] > arr[highValueIndex]) {
        highValueIndex = i;
      }
    }
    if (swapped) {
      arr.splice(arrayLength - 2, 0, arr.splice(highValueIndex, 1)[0]);
    }
    arrayLength = arrayLength - 2;
  }
  return arr;
}
