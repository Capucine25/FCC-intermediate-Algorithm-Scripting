function myReplace(str, before, after) {

  if (/(^[A-Z])/.test(before))
    {after = after[0].toUpperCase()+after.slice(1);}
  
 return str.replace(before,after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
