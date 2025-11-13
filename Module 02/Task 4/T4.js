function collectAndSortNumbers() {
    const numbers = [];
    let inputNumber;

    console.log("Starting number collection. Enter 0 to stop.");


    while (true) {

        const input = prompt("Enter a number (or 0 to finish):");


        inputNumber = parseInt(input);


        if (inputNumber === 0) {
            break;
        }


        if (!isNaN(inputNumber)) {
            numbers.push(inputNumber);
        } else if (input !== null) {

            console.log(`Skipping invalid input: "${input}"`);
            alert("Invalid input. Please enter a valid number.");
        }

    }


    numbers.sort((a, b) => b - a);


    console.log("---");
    console.log("Numbers entered (Largest to Smallest):");

    numbers.forEach(num => {
        console.log(num);
    });

    console.log("--- Program finished ---");
}


collectAndSortNumbers();