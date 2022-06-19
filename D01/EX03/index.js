function compareNumbers(num1, num2 ) {
  if (num1 === num2) {
    console.log(`The number ${num1} is equal to ${num2}`)
  } else if (num1 > num2) {
    console.log(`The number ${num1} is bigger than ${num2}`)
  } else {
    console.log(`The number ${num1} is less than ${num2}`)
  }
}
let num1, num2;
compareNumbers(num1, num2 )
// Do not remove or change this line, or the tests won't work
export { compareNumbers };


// In the JS file, edit the function provided. Use as template your previous function. This function should accept two parameters instead of one, where the first one is the number to be compared and the second one the one to compare with. You need to compare the numbers, and according to the right situation print in the console: 'The number X is bigger than Y' or 'The number X is less than Y' or 'The number X is equal to Y'. To test this exercise run: npm run testex3