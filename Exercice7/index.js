function convertToBinary() {
    const decimalInput = document.getElementById("decimalInput").value;
    if (isNaN(decimalInput)) {
      alert("Veuillez entrer un nombre décimal valide.");
      return;
    }
  
    let binaryResult = "";
    let decimalValue = parseInt(decimalInput);
  
    while (decimalValue > 0) {
      const remainder = decimalValue % 2;
      binaryResult = remainder + binaryResult;
      decimalValue = Math.floor(decimalValue / 2);
    }
  
    document.getElementById("binaryResult").textContent = binaryResult;
  }
  