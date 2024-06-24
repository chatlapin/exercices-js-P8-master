function pairNumbers(min, max) {
    let result = "";
    for (let i = min; i <= max; i += 2) {
      if (i === max) {
        result += i;
      } else {
        result += i + ",";
      }
    }
    return result;
  }
  
  export default pairNumbers;