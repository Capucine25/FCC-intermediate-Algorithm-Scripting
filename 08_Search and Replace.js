function pairElement(str) {

var arr=[];
var dict={A:"T", T:"A", G:"C", C:"G"};

for (letter of str)
  {arr.push([letter, dict[letter]]);}
 
return arr;
}

console.log(pairElement("GCG"));
