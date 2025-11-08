/**
 * Task 4: Hogwarts Sorting Hat
 * Function to randomly assign a student to a Hogwarts house.
 */
function sortStudent() {

    const nameInput = document.getElementById('studentName');
    const studentName = nameInput.value.trim();

    console.log(`Student Name Input: ${studentName}`);

    if (studentName === "") {
        document.getElementById('result').textContent = "Please enter your name, aspiring witch or wizard!";
        console.warn("Sorting failed: No name entered.");
        return;
    }


    const houseNumber = Math.floor(Math.random() * 4) + 1;

    console.log(`Generated House Number: ${houseNumber}`);

    let houseName = "";


    switch (houseNumber) {
        case 1:
            houseName = "Gryffindor";
            break;
        case 2:
            houseName = "Slytherin";
            break;
        case 3:
            houseName = "Hufflepuff";
            break;
        case 4:
            houseName = "Ravenclaw";
            break;
        default:
            houseName = "an Unknown House"; // Fallback
    }

    console.info(`Assigned House: ${houseName}`);


    const resultElement = document.getElementById('result');

    resultElement.textContent = `${studentName}, you are ${houseName}.`;
}