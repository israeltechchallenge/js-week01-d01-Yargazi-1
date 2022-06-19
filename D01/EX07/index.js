let number; 
let comparer;
const outputResult = document.getElementById("output");
const сalculateBtn = document.getElementById('сalculate');


function moduloEx6(number, comparer) {
  if (number === comparer) {
    console.log(`The number ${number} is equal to ${comparer}`)
    outputResult.innerHTML =`The number ${number} is equal to ${comparer}`;
  } else if (number < comparer) {
    outputResult.innerHTML =`The number ${number} is less than ${comparer}`;
  } else {
    outputResult.innerHTML =`The number ${number} is bigger than ${comparer}`;
  }
  (number > comparer && number % comparer > 0) ? outputResult.innerHTML =`The number ${number} is bigger than ${comparer}. But the modulo of ${number} % ${comparer} is ${number % comparer}` : false;
}

const getRandomNum = (number, comparer) => {
  number = Math.floor(Math.random() * 99);
  comparer = Math.floor(Math.random() * 99);
  console.log(`this is number ${number}`);
  console.log(`this is comparer ${comparer}`);
  moduloEx6(number, comparer);
  return number, comparer;
} 
getRandomNum()

сalculateBtn.addEventListener("click", getRandomNum); 