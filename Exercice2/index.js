function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Erreur : Division par zéro";
      } else {
        return num1 / num2;
      }
    default:
      return "Opérateur non reconnu";
  }
}
