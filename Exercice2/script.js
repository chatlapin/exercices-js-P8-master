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
  