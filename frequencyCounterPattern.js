// PROBLEM 1: write a function "same" which accepts two arrays; it should return true if every value in the first array has it's corresponding value squared in the second array.

// SOLUTION 1 -- O(nlog(n)) time complexity
function same1(array1, array2) {
  if (array1.length !== array2.length) return false
  const size = array1.length
  array1.sort()
  array2.sort()
  for (let i = 0; i < size; i++) {
    if (array2[i] !== (array1[i] * array1[i]))
      return false
  }
  return true
}

console.log("Solution 1")
console.log(same2([1, 2], [1]))
console.log(same2([3, 1, 2], [1, 4, 9]))
console.log(same2([1, 1, 1], [1, 1, 1]))
console.log(same2([1, 1, 1, 9, 81], [1, 9, 1, 1, 81]))
console.log(same2([1, 1, 1, 9], [1, 1, 1, 81]))

// SOLUTION 2 -- O(n) time complexity

function freqCounter(array) {
  let counter = {}
  for (element of array) {
    if (counter[element] > 0) counter[element] += 1;
    else counter[element] = 1;
  }
  return counter
}

function same2(array1, array2) {
  if (array1.length !== array2.length) return false
  let freqCounter1 = freqCounter(array1)
  let freqCounter2 = freqCounter(array2)
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false
    if (freqCounter1[key] !== freqCounter2[key ** 2]) return false
  }
  return true
}
console.log("Solution 2")
console.log(same2([1, 2], [1]))
console.log(same2([3, 1, 2], [1, 4, 9]))
console.log(same2([1, 1, 1], [1, 1, 1]))
console.log(same2([1, 1, 1, 9, 81], [1, 9, 1, 1, 81]))
console.log(same2([1, 1, 1, 9], [1, 1, 1, 81]))

// PROBLEM 2: given two strings, determine if they are anagrams

// SOLUTION
function isAnagram(string1, string2){
  if (string1.length !== string2.length) return false
  let freqCounter1 = freqCounter(string1) 
  let freqCounter2 = freqCounter(string2)
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) return false
    if (freqCounter1[key] !== freqCounter2[key]) return false
  }
  return true
}

console.log("isAnagram?")
console.log(isAnagram("oi", "io"))
console.log(isAnagram("cinema", "iceman"))
console.log(isAnagram("dude", "duude"))
console.log(isAnagram("1001", "1010"))
console.log(isAnagram("1001", "1011"))