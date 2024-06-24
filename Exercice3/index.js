function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return "No numbers to calculate average";
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
  
    return sum / numbers.length;
  }
  
  // Exemples d'utilisation de la fonction
  console.log(calculateAverage([5, 10, 15])); // Affiche 10
  console.log(calculateAverage([10, 20, 30, 20])); // Affiche 20
  console.log(calculateAverage([])); // Affiche "No numbers to calculate average"
  
  // Exportation de la fonction
  export default calculateAverage;
  