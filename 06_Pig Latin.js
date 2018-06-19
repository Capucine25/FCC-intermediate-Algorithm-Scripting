function translatePigLatin(str) {
  
  if(/^[^aeiou]+$/.test(str))
    {return str+"ay"}
    
  else if (/^[^aeiou]+/.test(str))
    {return str.replace(/(^[^aeiou]+)([A-Z]+)/i, '$2$1')+"ay";}
  
  else
    {return str+"way"}

}

console.log(translatePigLatin("bcv"));
