var React = require('react');
var ReactDOM = require('react-dom');
//ES6 distructuring syntax to pull of 4 new variables
//From React-Router library
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Line 3 is equivillant to the following
//var Route = require('react-router').Route;
//var Router = require('react-router').Router;
//etc ...

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
