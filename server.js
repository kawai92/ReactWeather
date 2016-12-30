var express = require('express');

//create application
var app = express(); //access to exxpress api

//to add functionality to the app
app.use(express.static('public'));

//server
// prm 1 = port number
// prm2 = function
app.listen(3000, function(){
  console.log('server is up on port 3000');
});
