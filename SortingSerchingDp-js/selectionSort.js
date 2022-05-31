const numbers = [89,34,56,78,43,12,3,1,6,3,7,87,45];

function selectionSort(array){
  const length = array.length;
  for(let i = 0; i < length; i++){
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if(array[j] < array[min]){
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));