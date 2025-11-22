const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateButton = document.getElementById("calculateBtn");
const resultParagraph = document.getElementById("result");


function calculate() {

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);


    const operation = operationSelect.value;

    let result;


    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = "Error: Please enter valid numbers.";
        return;
    }


    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":

            if (num2 === 0) {
                resultParagraph.textContent = "Error: Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultParagraph.textContent = "Error: Invalid operation.";
            return;
    }


    resultParagraph.textContent = `Result: ${result}`;
}


calculateButton.addEventListener("click", calculate);