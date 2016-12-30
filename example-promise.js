// function getTempCallback(location, callback){
//   callback(undefined, 17.4);
//   callback('City not found');
// }
//
// getTempCallback('London', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   }
//   else{
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found!');
//     }, 1000);
//   });
// }
//
// getTempPromise('London').then(function(temp){
//   console.log('promise success', temp);
// },function(err) {
//   console.log('promise error', err);
// });
// if(typeof 7 === 'number'){
//
// }

function addPromise(a,b) {
  return new Promise( function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number')
    {
      resolve(a+b);
    }
    else {
      reject('A and B must be numbers');
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('sucess!', sum);
}, function(err){
  console.log('error!', err);
});

addPromise('abdulla', 10).then( function(sum){
  console.log('Sucess', sum);
}, function(err){
  console.log('this should appear', err);
});
