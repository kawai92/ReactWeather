var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var location = this.props.location;
//     var temp = this.props.temp;
//     //var {location, temp} = this.props;
//     return (
//       <div>
//         <h3>it's {temp} in {location}.</h3>
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => (
  <div>
    <h3>it's {props.temp} in {props.location}.</h3>
  </div>
);
//you can define vars inside the arrow function,
//but you have toi use return key word

module.exports = WeatherMessage;
