function addTogether() {
  
if (arguments.length==2 && typeof arguments[0]=="number" && typeof arguments[1]=="number" )
  {return arguments[0]+arguments[1]
  }
  
else if (arguments.length==1 && typeof arguments[0]=="number")
  {var n=arguments[0]
    return function addOne(num){
      if (typeof num=="number")
        {return n + num}
      else
        {return undefined}
    }
    
  }

else
  {return undefined}
}
