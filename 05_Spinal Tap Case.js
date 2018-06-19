function spinalCase(str) {
  
 //Adds a "-" in front of uppercase letters
 for (var letter of str){
   
   if (/[A-Z]/.test(letter)){
     str=str.slice(0,str.indexOf(letter)).toLowerCase()
     +" "+str.slice(str.indexOf(letter))}}

//Replaces all consecutive non letter character with -
str=str.trim().replace(/[\W|_]+/g,"-")

  return str.toLowerCase();
}

console.log(spinalCase("This      IsSpinal_Tap"));
