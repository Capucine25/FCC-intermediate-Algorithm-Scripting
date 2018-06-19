function truthCheck(collection, pre) {

var test=0
  
  for (var i=0;i<collection.length;i++){
    if (!collection[i][pre])
      {test+=1}
  }
  
  return test == 0
  
}
