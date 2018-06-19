function fearNotLetter(str) {
  
var dict="abcdefghijklmnopqrstuvwxyz" 

var first=dict.indexOf(str[0])

for (var i=0;i<str.length;i++){
  var j=first+i
    if (str[i] != dict[j] )
      {var letter=dict[j]
      break}
      }

  return letter;
}

console.log(fearNotLetter("stvwx"));
