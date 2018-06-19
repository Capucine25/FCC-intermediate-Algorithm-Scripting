function translatePigLatin(str) {
  
  //if there is only consonants in the word
  if(/^[^aeiou]+$/.test(str))
    {return str+"ay"}
    
 //Word starts with a consonant
  else if (/^[^aeiou]+/.test(str))
    {return str.replace(/(^[^aeiou]+)([A-Z]+)/i, '$2$1ay');}
  
  //Word starts with a vowel
  else
    {return str+"way"}

}

console.log(translatePigLatin("bcv"));
