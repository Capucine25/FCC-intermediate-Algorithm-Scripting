
function isIn (name,source){
var num = 0;
var total= 0;
  for (var property in source){
    total+=1
    if (source[property] == name[property])
      {num+=1;}
  }
return num == total;
}

function whatIsInAName(collection, source) {
  var arr=[];
  for (var object of collection){
    if (isIn(object,source)){
      arr.push(object);
    }
  }
  return arr;
}
