const form = document.getElementById('search-form');
const queryInput = document.getElementById('query');
const API_URL = 'https://api.tvmaze.com/search/shows?q=';
const DEFAULT_IMAGE_URL = 'https://placehold.co/210x295?text=Not+Found';

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

        if (data && data.length > 0) {

            const show = data[0].show;


            const imageUrl = (show.image && show.image.medium)
                ? show.image.medium
                : DEFAULT_IMAGE_URL;


            console.log("--- Show Details (Best Match) ---");
            console.log(`Title: ${show.name}`);
            console.log(`Status: ${show.status}`);
            console.log(`Image URL: ${imageUrl}`);


            console.log("\n--- Full JSON Data ---");
            console.log(data);

        } else {
            console.log("No TV series found.");
        }

    } catch (error) {
        console.error("Fetch error:", error);
    }
}