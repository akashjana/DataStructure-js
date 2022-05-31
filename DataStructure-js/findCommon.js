
// function findCommon(arr1,arr2){
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i]===arr2[j])
//                 return true;
//         }
//     }
//     return false;
// }


function findCommon(arr1, arr2){
  let objectArr = {};
  for(let i=0;i<arr1.length;i++){
    if(!objectArr[arr1[i]]){
      objectArr[arr1[i]] = true;
    }
  }
  //console.log(objectArr);
  for(let i=0;i<arr2.length;i++){
    if(objectArr[arr2[i]])
      return true;
  }
  return false;
}



let array1 = ['a','b','c','d'];
let array2 = ['x','y','z'];

//findCommon(array1,array2);

if(findCommon(array1,array2))
  console.log("found common");
else
  console.log("not found common");
  