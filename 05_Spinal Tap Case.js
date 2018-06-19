function spinalCase(str) {
 
 //Ajoute un - devant les lettres majuscules (pour les mots colles)
 for (letter of str){
   
   if (/[A-Z]/.test(letter)){
     str=str.slice(0,str.indexOf(letter)).toLowerCase()
     +"-"+str.slice(str.indexOf(letter))}}
     
str=str.replace((/\W+/),"-")
console.log(str)
  
  
     
     

   
 
 
  return str;
}

spinalCase("This IsSpinalTap");
