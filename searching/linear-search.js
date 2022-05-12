// O(n)
function linearSearch(arr, val){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val) return i
  }
  return -1
}

console.log(linearSearch(["12312", "dude", "cinema", "ra"], "12312"))
console.log(linearSearch(["12312", "dude", "cinema", "ra"], "dude"))
console.log(linearSearch(["12312", "dude", "cinema", "ra"], "ra"))
console.log(linearSearch(["12312", "dude", "cinema", "ra"], "oi"))