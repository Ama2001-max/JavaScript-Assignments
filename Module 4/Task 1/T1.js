const form = document.getElementById('search-form');
const queryInput = document.getElementById('query');
const API_URL = 'https://api.tvmaze.com/search/shows?q=';

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const seriesName = queryInput.value.trim();

    if (seriesName) {
        const fullUrl = API_URL + encodeURIComponent(seriesName);
        fetchSeriesInfo(fullUrl);
    }
});

async function fetchSeriesInfo(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();


        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}