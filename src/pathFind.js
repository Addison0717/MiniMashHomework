// path = array of 1 string // EXAMPLE ['foo']
// object = object // EXAMPLE { name: 'foo', age: 2 }
// Call the function pathFind


// Only is working for one string in array :(
function myPathFind(path, object) {
  const reducer = path.reduce(function(acc, current){
    return acc + current
  }, '')
  return object[reducer]
}


// Will work for either multiple or single string arrays!! :)
const pathFind = (path, obj) => {
    return path.reduce((object, key) =>
        (object && object[key] !== 'undefined') ? object[key] : undefined, obj);
}



// USING BELOW THIS LINE TO TEST


// const oneString = ['foo']
// const multipleString = ['foo1', 'foo2', 'bar']
//
// const objOne = {
//   foo: "Hey"
// }
//
// const objMultiple = {
//     foo1: {
//         foo2: {
//             bar: "Some value"
//         }
//     }
// }

// function imATester(array, object){
//     if ( array.length <= 1 ) {
//       const reducer = array.reduce(function(acc, current){
//         return acc + current
//       }, '')
//       return object[reducer] //THIS WILL WORK FOR ONE STRING
//     } else {
//
//       const result = array.reduce((obj, key) =>
//         (obj && obj[key] !== 'undefined') ? obj[key] : undefined, object);
//         return result
//     }
// }

// const one = imATester(objOne, oneString);
// console.log(one)
//
// const multiple = imATester(objMultiple, multipleString);
// console.log(multiple)


module.exports = { pathFind }
