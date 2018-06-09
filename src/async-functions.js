// PROMISES and CALLBACKS

function giveItBackLater(value, callback) {
  function loadComplete() {
      callback(value)
  }
  setTimeout(loadComplete, 1000)
}







function addSomePromises(somePromise){
  return new Promise(function(resolve,reject){

    // const outputPromise = addSomePromises(somePromise)

    if (true) {
      resolve(somePromise)
    } else {
      reject(somePromise)
    }
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
