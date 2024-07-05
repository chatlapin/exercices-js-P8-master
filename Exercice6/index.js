// Get the display element
const displayElement = document.getElementById("display");

// Function to append a value to the display
function appendToDisplay(value) {
  displayElement.value += value;
}

// Function to clear the display
function clearDisplay() {
  displayElement.value = "";
}

// Function to safely calculate a mathematical expression
function calculateResult() {
  try {
    // Use a math parser library for safe evaluation (e.g., mathjs)
    const math = require('mathjs');  // Assuming mathjs is installed

    const expression = displayElement.value;
    const result = math.eval(expression);
    displayElement.value = result;
  } catch (error) {
    // Handle errors gracefully, e.g., display an error message
    console.error("Error calculating expression:", error.message);
    displayElement.value = "Error";
  }
}
