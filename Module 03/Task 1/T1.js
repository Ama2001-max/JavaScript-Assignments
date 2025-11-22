

const targetElement = document.getElementById('target');


const listHTML = `
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
`;
targetElement.innerHTML = listHTML;


targetElement.classList.add('my-list');