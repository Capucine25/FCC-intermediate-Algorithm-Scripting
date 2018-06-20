function steamrollArray(arr) {
  
  var newArr=[];

//uses recursion. If not an array, gets added to newArr. If it is an array, recursion helps get deeper into the array.
  function arrOut(arr){
    for r (i=0;i<arr.length;i++){
      if (Array.isArray(arr[i])==false)
        {newArr.push(arr[i]);}
      else 
        {arrOut(arr[i]);}

    }
    return newArr;  
  }
  return arrOut(arr);
}
