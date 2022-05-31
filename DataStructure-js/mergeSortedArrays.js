function mergeSortedArrays(arr1,arr2){
  return arr1.concat(arr2).sort();
}

console.log(mergeSortedArrays([1,3,5],[0,2,6,4]));