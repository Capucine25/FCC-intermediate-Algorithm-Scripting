function is_in(arr, number){
  var num2=0
  for (var i=0;i<arr.length;i++){
    if (arr[i]==number)
      {num2=1}
  }
  return num2==1;
}

function array_is_in(arr1,arr2){
  var newArray=[]
    for (var j=0;j <arr2.length;j++){
       if (is_in(arr1, arr2[j])==false)
         {newArray.push(arr2[j])}
}
return newArray}

function diffArray(arr1,arr2){
  var newArray = array_is_in(arr1,arr2).concat(array_is_in(arr2,arr1))

return newArray;}
