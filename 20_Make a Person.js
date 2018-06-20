var Person = function(firstAndLast) {
  var FullName=firstAndLast;
  var FirstName = FullName.split(" ")[0];
  var LastName = FullName.split(" ")[1];
  
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return FullName;
  };
  this.getLastName = function(){
    return LastName;
  }
  this.getFirstName= function(){
    return FirstName;
  }
  this.setFirstName = function(first){
    FirstName= first;
    FullName= FirstName+" "+LastName;
  }
  this.setLastName = function(last){
    LastName= last;
    FullName= FirstName+" "+LastName;
  }
  this.setFullName=function(firstAndLast){
    FullName=firstAndLast;
    FirstName=FullName.split(" ")[0];
    LastName=FullName.split(" ")[1];
  }
};
