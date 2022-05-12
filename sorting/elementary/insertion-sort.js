function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current
  }
  return arr
}

console.log(insertionSort([9, -1, -20, 4, 54, 1, 32]))
