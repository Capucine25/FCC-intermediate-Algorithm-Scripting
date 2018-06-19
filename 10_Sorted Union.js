function uniteUnique(arr) {

arr=arr.concat(arguments[1]).concat(arguments[2]).concat(arguments[3])
var arr2 = arr.slice(0)

  for (var i=0; i<arr.length;i++){
    if (arr2.indexOf(arr[i]) != arr2.lastIndexOf(arr[i])){
      arr2.splice(arr2.lastIndexOf(arr[i]),1)
      
    }
    else if (arr[i] == null)
      {arr2.splice(arr2.indexOf(arr[i]),1)}
    }
return arr2;   
}
 
