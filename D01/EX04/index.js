let num1, num2;
function modulo(num1, num2) {
  if (num1 === num2) {
    console.log(`The number ${num1} is equal to ${num2}`)
  } else if (num1 > num2) {
    console.log(`The number ${num1} is bigger than ${num2}`)
    let modulo = num1 % num2;
    (modulo > 0) ? console.log(`The modulo of ${num1} % ${num2} is ${modulo}`) : false;
  } else {
    console.log(`The number ${num1} is less than ${num2}`)
  }

}
modulo(num1, num2)
// Do not remove or change this line, or the tests won't work
export { modulo };
