function sumFibs(num) {
  
var n1=1
var n2=1
var sum=2
var n=0

while (n<=num) {
  var n=n1+n2
  
  if (n%2!=0)
   {sum+=n}
   
  n1=n2
  n2=n}
  
  
  return sum-n;
}

console.log(sumFibs(1000));
