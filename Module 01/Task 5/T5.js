/**
 * Task 5: Leap Year Checker
 * Function to determine if an input year is a leap year and display the result.
 */
function checkLeapYear() {

    const yearInput = document.getElementById('inputYear');
    const year = parseInt(yearInput.value); // Convert the input value to an integer
    const resultElement = document.getElementById('result');


    resultElement.textContent = "";


    if (isNaN(year) || year <= 0) {
        resultElement.textContent = "Please enter a valid year (a positive number).";
        return;
    }

    let isLeap = false;
    let message = "";


    if (year % 400 === 0) {

        isLeap = true;
    } else if (year % 100 === 0) {

        isLeap = false;
    } else if (year % 4 === 0) {

        isLeap = true;
    } else {

        isLeap = false;
    }


    if (isLeap) {
        message = `${year} IS a leap year.`;
    } else {
        message = `${year} is NOT a leap year.`;
    }

    resultElement.textContent = message;
    console.log(`Leap Year Check for ${year}: ${isLeap}`);
}