const numbers = [89,34,56,78,43,12,3,1,6,3,7,87,45];

function quickSort(array, left, right){
  const length = array.length;
  let pivot;
  let partitionIndex;
  if(left < right){
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;
  for(let i = left; i < right; i++){
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}
function swap(array, firstIndex, secondIndex){
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

console.log(quickSort(numbers, 0, numbers.length-1));