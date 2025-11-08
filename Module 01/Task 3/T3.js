/**
 * Task 3: Sum, Product, and Average
 * Prompts the user for three numbers, calculates, and displays the results.
 */
function calculateNumbers() {

    const num1Str = prompt("Enter the first integer:");
    const num2Str = prompt("Enter the second integer:");
    const num3Str = prompt("Enter the third integer:");

    const num1 = parseFloat(num1Str);
    const num2 = parseFloat(num2Str);
    const num3 = parseFloat(num3Str);

    const resultElement = document.getElementById('results');
    resultElement.innerHTML = "";


    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultElement.textContent = "Error: Please enter valid numbers for all three prompts.";
        console.error("Invalid input detected.");
        return;
    }




    const sum = num1 + num2 + num3;


    const product = num1 * num2 * num3;


    const average = (sum / 3).toFixed(2);


    const outputHTML = `
        <h2>Results:</h2>
        <p>You entered the numbers: <strong>${num1}, ${num2}, ${num3}</strong></p>
        <ul>
            <li>Sum: <strong>${sum}</strong></li>
            <li>Product: <strong>${product}</strong></li>
            <li>Average: <strong>${average}</strong></li>
        </ul>
    `;


    resultElement.innerHTML = outputHTML;

    console.log(`Sum: ${sum}, Product: ${product}, Average: ${average}`);
}