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

//Alternative solution that should take less time

function sumPrimes(num) {
  
var Sum=2;
var primeNum=[2]

//Checks for every number lower or equals to num
  for (var i=3;i<=num;i++){
   var test=0;
   
   //Check if the number is prime (is if divisible by any other prime?)
   //If it is, adds one to test value. If test value stays to 0, the number is prime
   //and is added to the sum (value Sum) and to the array containing all prime.
    for (var j=0;j<primeNum.length;j++){
      if (i%primeNum[j]==0)
        {test+=1;}
    }

    if (test ==0)
      {Sum+=i;
      primeNum.push(i) 
      }
    
  }  
     
  return Sum;
}
