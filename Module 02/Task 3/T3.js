function displayDogNames() {
    const dogNames = [];
    const requiredCount = 6;


    for (let i = 0; i < requiredCount; i++) {

        const name = prompt(`Enter the name of dog ${i + 1} of ${requiredCount}:`);


        if (name && name.trim() !== "") {
            dogNames.push(name.trim());
        } else {
            alert("Name cannot be empty. Please enter a valid name.");
            i--;
        }
    }


    dogNames.sort();
    dogNames.reverse();




    const container = document.getElementById('dogListContainer');


    const unorderedList = document.createElement('ul');


    dogNames.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        unorderedList.appendChild(listItem);
    });


    container.appendChild(unorderedList);
}


displayDogNames();