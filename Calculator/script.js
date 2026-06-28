const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear all
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1500);

    }

}