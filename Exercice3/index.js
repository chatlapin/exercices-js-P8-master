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
