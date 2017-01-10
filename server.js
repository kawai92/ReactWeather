var express = require('express');

//create application
var app = express(); //access to exxpress api
//Environment variable
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }
  else{
    resp.redirect('http://' + req.hostname + req.url)
  }
});

//to add functionality to the app
app.use(express.static('public'));

//server
// prm 1 = port number
// prm2 = function
app.listen(PORT, function(){
  console.log('server is up on port ' + PORT);
});
