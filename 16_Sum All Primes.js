function sumPrimes(num) {
  
var primeNum=2;

//Checks for every number lower or equals to num
  for (var i=3;i<=num;i++){
   var test=0;
   
   //Check if the number is prime. If it is, adds one to test value. If test value stays to 0, the number is prime
   //and is added to the sum (value primeNum)
    for (var j=2;j<i;j++){
      if (i%j==0)
        {test+=1;}
    }

    if (test ==0)
      {primeNum+=i;}
    
  }  
     
  return primeNum;
}
