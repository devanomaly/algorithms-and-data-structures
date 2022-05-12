// Q1) Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.

// SOLUTION Q1:

function averagePair(arr, target) {
  const size = arr.length
  let min = 0
  let max = size - 1
  let avg = (arr[1] + arr[min]) / 2
  // fast-fail with some base cases
  if (target < avg) return false
  if (target > (arr[size - 1] + arr[size - 2]) / 2) return false
  // main loop
  while (min < max) {
    avg = (arr[max] + arr[min]) / 2
    if (avg === target) return true
    else if (avg > target) max--;
    else min++;
  }
  return false
}

console.log(averagePair([1, 2, 3], 2.5)) //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) //false
console.log(averagePair([], 4)) //false

// Q2) Write a function called isSubsequence which takes in two strings and checks whether the characters in the first form a subsequence of the characters in the second - order must be taken into account.

// SOLUTION Q2:

function isSubsequence(str1, str2) {
  const size1 = str1.length
  const size2 = str2.length
  if (size1 > str2.length) return false
  let point1 = 0
  let point2 = 0
  while (point1 < size1) {
    if (str1[point1] === str2[point2]) { point1++; point2++; }
    else if (point2 === size2 || point1 === size1) return false
    else point2++
  }
  return true
}

console.log(isSubsequence("123", "1"))
console.log(isSubsequence("hello", "hello world"))
console.log(isSubsequence("sing", "sting"))
console.log(isSubsequence("abc", "abracadabra"))
console.log(isSubsequence("abc", "acb"))
console.log(isSubsequence("ad", "acb"))

// Q3) Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.