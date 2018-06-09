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
  // console.log(reducer)
  // console.log(object)
  // console.log(object[reducer])
}

// pathFind(['foo'], obj)



// USING BELOW THIS LINE TO TEST 



const testString = ['foo', 'bar']



if ( testString.length <= 1 ) {
  const reducer = testString.reduce(function(acc, current){
    return acc + current
  }, '')
} else {
  const reducer = testString.map(item => item)
}

// const reducer = testString.reduce(function(acc, current){
//   return acc + current
// }, '')

console.log(reducer)





module.exports = { pathFind }
