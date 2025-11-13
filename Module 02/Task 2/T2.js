
function runParticipantProgram() {
    let participantCount;
    const participantNames = [];


    while (true) {
        const input = prompt("Enter the number of participants:");
        participantCount = parseInt(input);

        if (!isNaN(participantCount) && participantCount > 0) {
            break;
        } else {
            alert("Please enter a valid positive number for the count.");
        }
    }


    for (let i = 0; i < participantCount; i++) {
        const name = prompt(`Enter the name of participant ${i + 1} of ${participantCount}:`);


        if (name && name.trim() !== "") {
            participantNames.push(name.trim());
        } else {
            alert("Name cannot be empty. Please re-enter.");
            i--;
        }
    }


    participantNames.sort();

    const container = document.getElementById('participantListContainer');


    const orderedList = document.createElement('ol');


    participantNames.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        orderedList.appendChild(listItem);
    });


    container.appendChild(orderedList);
}


runParticipantProgram();