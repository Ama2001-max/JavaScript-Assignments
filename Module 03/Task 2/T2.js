

const listData = ["First item", "Second item", "Third item"];
const targetElement = document.getElementById('target');


for (let i = 0; i < listData.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = listData[i];


    if (i === 1) {
        listItem.classList.add('my-item');
    }

    targetElement.appendChild(listItem);
}