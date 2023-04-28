const threeArgs = function (arg1, arg2, arg3) {
  return [arg1, arg2, arg3]
}

threeArgs()

// Spread syntax (Rest parameters)
const restArgs = function (arg1, arg2, ...restArgs) {
  return [arg1, arg2, restArgs]
}

// Arrow function
const arrow1 = function (name) {
  return `hello ${name}`
}
const arrow2 = (name) => { return `hello ${name}` }
const arrow3 = name => { return `hello ${name}` }
const arrow4 = name => `hello, ${name}`

const colors = ['red', 'blue', 'green']

/* colors.forEach(function (color, index, array) {
  console.log(color)
  console.log(index)
  console.log(array)
}) */

/* const products = [
  { name : 'cucumber', type: 'vegetable'},
  { name : 'banana', type: 'fruit'},
  { name : 'carrot', type: 'vegetable'},
  { name : 'apple', type: 'fruit'},
]

const fruitFilter = function (product) {
  return product.type === 'fruit'
}

const fruits = products.filter(fruitFilter)
console.log(fruits) */

const tests = [90, 90, 80, 77]

const sum = tests.reduce(function (total, x) {
  return total + x
})