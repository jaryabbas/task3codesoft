// Get references to HTML elements
const resultInput = document.getElementById("result");

// Function to append characters to the display
function appendToDisplay(value) {
    resultInput.value += value;
}

// Function to clear the display
function clearDisplay() {
    resultInput.value = "";
}

// Function to calculate the result
function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = "Error";
    }
}
