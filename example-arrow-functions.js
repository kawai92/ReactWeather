//Regular javascript method
var names = ['Andrew', 'Abdull', 'Jasim', 'David'];

names.forEach( function (name) {
  console.log('forEach', name);
  //in here you cant use multiple statemebts
});

//Arrow functions
//For annonymous functions
//Define the Arrow function
names.forEach( (name) => {
  console.log('arrowFunc', name);
  //you can add multiple statements
  //inside the curly braces
  console.log('something');
  var x = 'something else';
});

//Or you can meke it simpler
//if you want to run only one statement
names.forEach((name) => console.log(name));

//even simpler approach
//what ever is defined will be returned
var returnMe = (name) => name + '!';
console.log(returnMe('Abdulla'));

// Arrow Vs Annoynymous
// Arrow: Take on the Parents "This" binding
// Annon: Have "This" binding
// Demonstrate

//Annoynymous function
var person = {
  name: 'Abdulla',
  greet: function () {
   //The Annoynymous updated the this binding
   //That means "this" in here doesnt refer to name
    names.forEach( function (name) {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

//Arrow function
var person = {
  name: 'Abdulla',
  greet: function () {
    names.forEach( (name) => {
      //"this" still refers to the person object
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();

//Challenge excercise 
var addStatement = (a,b) => {
  return a+b;
};

var addExpression = (a, b) => a+b;

console.log(addStatement(4, 5));
console.log(addExpression(6, 98));
