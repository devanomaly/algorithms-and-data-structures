function binarySearch(sortedArr, val) {
  const size = sortedArr.length
  let min = 0
  let max = size - 1
  let middle = Math.floor((min + max) / 2)
  // Some base cases to speed up
  if (val < sortedArr[min] || val > sortedArr[max]) return -1
  if (val === sortedArr[min]) return min
  if (val === sortedArr[max]) return max
  // main loop
  while (min <= max) {
    if (val > sortedArr[middle]) {
      min = middle + 1
    }
    else if (val < sortedArr[middle]) {
      max = middle - 1
    }
    else return middle
    middle = Math.floor((min + max) / 2)
  }
  return -1
}

A = [-10, 0, 2, 5, 6, 6.5, 9, 1000]
console.log(binarySearch(A, -19))
console.log(binarySearch(A, -10))
console.log(binarySearch(A, 7))
console.log(binarySearch(A, 5))
console.log(binarySearch(A, 0))
console.log(binarySearch(A, 9))
console.log(binarySearch(A, 1000))
