const form = document.getElementById('search-form');
const queryInput = document.getElementById('query');
const targetElement = document.getElementById('target');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = queryInput.value.trim();

    if (searchTerm) {

        const API_URL = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(searchTerm)}`;
        fetchJokes(API_URL);
    }
});

async function fetchJokes(url) {

    targetElement.innerHTML = '';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();


        if (data.result && data.result.length > 0) {
            displayJokes(data.result);
        } else {
            targetElement.innerHTML = '<p>No jokes found for that search term.</p>';
        }

    } catch (error) {
        targetElement.innerHTML = `<p>Error fetching jokes: ${error.message}</p>`;
    }
}

function displayJokes(jokesArray) {
    jokesArray.forEach(joke => {

        const article = document.createElement('article');


        const paragraph = document.createElement('p');


        paragraph.textContent = joke.value;


        article.appendChild(paragraph);


        targetElement.appendChild(article);
    });
}