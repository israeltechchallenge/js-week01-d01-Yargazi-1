let num;
function isBiggerThan(num) {
  if (num > 4) {
    console.log(`The number ${num} is bigger than 4`);
  } else if (num < 4) {
    console.log(`The number ${num} is less than 4`);
  } else if (num === 4) {
    console.log(`The number ${num} is equal to 4`);  
  }

}
isBiggerThan(num)
export { isBiggerThan };
