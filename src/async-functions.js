// PROMISES and CALLBACKS

function giveItBackLater(value, callback) {
  function loadComplete() {
      callback(value)
  }
  setTimeout(loadComplete, 1000)
}







function addSomePromises(somePromise){
  return new Promise(function(resolve,reject){

      somePromise.then(function(value){
        resolve(value.repeat(2))
      }, function(value){
        resolve(value.repeat(3))
      })

  })
}












function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    function loadComplete() {
      if (value === undefined) {
        reject('You Suck')
      }
      resolve(value)
    }
    setTimeout(loadComplete, 1000)
  })
}












module.exports = {
  giveItBackLater,
  addSomePromises,
  promiseToGiveItBackLater
}
