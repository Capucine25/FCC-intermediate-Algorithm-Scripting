var Person = function(firstAndLast) {
  var fullName=firstAndLast;
  var firstName = fullName.split(" ")[0];
  var lastName = fullName.split(" ")[1];
  
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return fullName;
  };
  this.getLastName = function(){
    return lastName;
  }
  this.getFirstName= function(){
    return firstName;
  }
  this.setFirstName = function(first){
    firstName= first;
    fullName= firstName+" "+lastName;
  }
  this.setLastName = function(last){
    lastName= last;
    fullName= firstName+" "+lastName;
  }
  this.setFullName=function(firstAndLast){
    fullName=firstAndLast;
    firstName=fullName.split(" ")[0];
    lastName=fullName.split(" ")[1];
  }
};

var bob = new Person('Bob Ross');
