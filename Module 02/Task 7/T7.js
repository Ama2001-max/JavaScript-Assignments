function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function runVariableDiceGame() {
    let maxSides;

    while (true) {
        const input = prompt("Enter the number of sides on the die:");
        maxSides = parseInt(input);

        if (!isNaN(maxSides) && maxSides >= 2) {
            break;
        } else {
            alert("Please enter a valid number (2 or more) for the die sides.");
        }
    }

    let currentRoll;
    const targetValue = maxSides;

    const container = document.getElementById('rollResultsContainer');
    const unorderedList = document.createElement('ul');

    do {
        currentRoll = rollDice(maxSides);
        const listItem = document.createElement('li');
        listItem.textContent = `Rolled: ${currentRoll} (out of ${maxSides})`;
        unorderedList.appendChild(listItem);
    } while (currentRoll !== targetValue);

    container.appendChild(unorderedList);
}

runVariableDiceGame();