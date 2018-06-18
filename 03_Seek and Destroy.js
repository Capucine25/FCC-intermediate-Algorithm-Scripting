function remove (arr, num){
  var newArr=arr.filter(elem => elem!=num);
  return newArr;
}

function destroyer(arr) {
  for (var i=1;i<arr.length;i++)
    {arr=remove(arr,arguments[i]);
    }
  return arr;
}

console.log(destroyer( [1, 2, 3, 1, 2, 3], 2, 3));
