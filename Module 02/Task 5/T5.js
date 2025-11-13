
function collectUniqueNumbers() {
    const uniqueNumbers = [];

    console.log("Starting number collection. Enter a number you have already entered to stop.");


    while (true) {

        const input = prompt("Enter a number:");


        if (input === null) {
            console.log("User cancelled the input process.");
            break;
        }


        const inputNumber = parseInt(input);


        if (isNaN(inputNumber)) {
            console.log(`Skipping invalid input: "${input}"`);
            alert("Invalid input. Please enter a valid number.");
            continue;
        }


        if (uniqueNumbers.includes(inputNumber)) {

            alert(`The number ${inputNumber} has already been given. Stopping input.`);
            console.log(`--- STOPPED: Duplicate number entered: ${inputNumber} ---`);
            break; // Stop the loop and the program's operation
        }


        uniqueNumbers.push(inputNumber);
    }




    uniqueNumbers.sort((a, b) => a - b);


    console.log("Collected numbers (Ascending Order):");

    uniqueNumbers.forEach(num => {
        console.log(num);
    });

    console.log("--- Program finished ---");
}


collectUniqueNumbers();