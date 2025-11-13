function rollDice() {

    return Math.floor(Math.random() * 6) + 1;
}


function runDiceGame() {
    const rollResults = [];
    let currentRoll;


    const container = document.getElementById('rollResultsContainer');


    const unorderedList = document.createElement('ul');


    do {

        currentRoll = rollDice();


        rollResults.push(currentRoll);


        const listItem = document.createElement('li');
        listItem.textContent = `Roll: ${currentRoll}`;
        unorderedList.appendChild(listItem);


        console.log(`Rolled a ${currentRoll}`);

    } while (currentRoll !== 6);


    container.appendChild(unorderedList);

    console.log("--- Finished: Rolled a 6! ---");
}


runDiceGame();