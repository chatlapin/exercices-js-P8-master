function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    //caluclate using eval
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}