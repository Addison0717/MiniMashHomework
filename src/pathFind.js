// path = array of 1 string // EXAMPLE ['foo']
// object = object // EXAMPLE { name: 'foo', age: 2 }

const obj = {
  foo: "Hey"
}

function pathFind(path, object) {

  const reducer = path.reduce(function(acc, current){
    return acc + current
  }, '')
  return object[reducer]

}

// pathFind(['foo'], obj)






// USING BELOW THIS LINE TO TEST


const oneString = ['foo1']
const multipleString = ['foo1', 'foo2', 'bar']

const objTest = {
    foo1: {
        foo2: {
            bar: "Some value"
        }
    }
}

console.log()


function imATester(array, object){

    if ( array.length <= 1 ) {
      const reducer = array.reduce(function(acc, current){
        return acc + current
      }, '')
      console.log(reducer)
      // return object[reducer] //THIS WILL WORK FOR ONE STRING
    } else {
      const reducer = array.map(item => item)
      console.log(reducer)
    }

}

// imATester(oneString, objTest)
// imATester(multipleString, objTest)





module.exports = { pathFind }
