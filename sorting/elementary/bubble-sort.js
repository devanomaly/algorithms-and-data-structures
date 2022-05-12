// Optimized BubbleSort with noSwaps (eases the job for quasi-sorted arrays)
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    } 
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([9,-1, -20, 4, 54, 1, 32]))
