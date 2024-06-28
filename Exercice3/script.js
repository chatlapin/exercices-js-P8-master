function clearDisplay() {
  document.calc.txt.value = "";
}

function appendNumber(number) {
  document.calc.txt.value += number;
}

function appendOperator(operator) {
  document.calc.txt.value += operator;
}

function calculate() {
  // Implement safer calculation logic here (e.g., using math functions or mathjs)
  // This example uses eval (not recommended due to security risks) for demonstration purposes only.
  // Replace with safer approach in production.
  let result = eval(document.calc.txt.value);
  document.calc.txt.value = result;
}

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return "No numbers to calculate average";
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  const average = sum / numbers.length;
  return average;
}
