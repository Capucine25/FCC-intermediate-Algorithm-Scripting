function uniteUnique(arr) {

for (var i = 0; i < arguments.length; i++) {
    arr=arr.concat(arguments[i])}

var arr2 = arr.slice(0)

  for (var i=0; i<arr.length;i++){
    if (arr2.indexOf(arr[i]) != arr2.lastIndexOf(arr[i])){
      arr2.splice(arr2.lastIndexOf(arr[i]),1)}
    }
return arr2;   
}
 
