function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(2))
// console.log(sumRange(3))
// console.log(sumRange(5))

function iterativeFactorial(num) {
  let total = 1
  for (let i = 1; i <= num; i++) {
    total *= i
  }
  return total
}
// console.log(iterativeFactorial(0))
// console.log(iterativeFactorial(1))
// console.log(iterativeFactorial(2))
// console.log(iterativeFactorial(3))
// console.log(iterativeFactorial(20))

function recursiveFactorial(num) {
  if (num === 0) return 1
  return num*recursiveFactorial(num-1)
}
// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(1))
// console.log(recursiveFactorial(2))
// console.log(recursiveFactorial(3))
// console.log(recursiveFactorial(20))

// RECURSION HELPER METHOD 
// pattern:
function outer(input) {
  var outerScopedVariable = []
  
  function helper(helperInput){
    // modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)

  return outerScopedVariable;
}
// example:
function collectOddValues(array) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0]%2 !== 0) result.push(helperInput[0])
    helper(helperInput.slice(1))
  }
  helper(array)
  return result
}

// the pure recursion way
function collectOddValues2(arr) {
  let newArray = []
  if (arr.length === 0) return newArray
  if (arr[0] % 2 !== 0) newArray.push(arr[0])
  return newArray.concat(collectOddValues(arr.slice(1)))
}

console.log(collectOddValues([1,2,3,4,5]))
console.log(collectOddValues2([1,2,3,4,5]))