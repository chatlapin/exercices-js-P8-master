function clearDisplay() {
  document.calc.txt.value = "";
}

function appendNumber(number) {
  document.calc.txt.value += number;
}

function appendOperator(operator) {
  document.calc.txt.value += operator;
}

function calculate(x, y, operator) {
  const a = Number(x)
  const b = Number(y)
  if (operator === '+') {
      return a + b
  } else if (operator === '-') {
      return a - b
  } else if (operator === '*') {
      return a * b
  } else if (operator === '/') {
      if (b === 0) {
          return "Division by zero is not allowed"
      } else {
          return a / b
      }
  } else {
      return "Invalid operator"
  }
}

/*
Créez une fonction JavaScript appelée `calculateAverage` qui prend un 
tableau de nombres en tant que paramètre et retourne la moyenne de ces nombres. 
Si le tableau est vide, il faudra retourner un message `No numbers to calculate 
average`.
*/

function calculateAverage(numbers) {
  if (numbers === undefined) {
      return "No numbers to calculate average"
  }
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]
  }
  return sum / numbers.length
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage