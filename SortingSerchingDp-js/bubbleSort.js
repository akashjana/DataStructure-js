const numbers = [89,34,56,78,43,12,3,1,6,3,7,87,45];

function bubbleSort(array){
  const length = array.length;
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length - i; j++){
      if(array[j]>array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers));