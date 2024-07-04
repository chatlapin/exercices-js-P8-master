function convertToBinary() {
    let decimalInput = document.getElementById("decimalInput").value;
    let binaryResult = document.getElementById("binaryResult");
    binaryResult.innerHTML = "";

    if (decimalInput === "") {
        binaryResult.innerHTML = "Veuillez entrer un nombre décimal";
        return;
    }

    let binaryString = "";
    let decimalNumber = parseInt(decimalInput);
    console.log(decimalNumber);
    if (isNaN(decimalNumber)) {
        binaryResult.innerHTML = "Veuillez entrer un nombre décimal valide";
        return;
    }
    while (decimalNumber > 0) {
        binaryString += decimalNumber % 2;
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    binaryString = binaryString.split("").reverse().join("");
    binaryResult.innerHTML = binaryString;
}