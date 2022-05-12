// PROBLEM: given an array, find the largest sum o n consecutive values in it.

// SOLUTION
function maxSubarraySum(array, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  for (let i = num; i < array.length; i++) {
    temSum = maxSum + array[i] - array[i-num]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}