const API_URL = 'https://api.chucknorris.io/jokes/random';

async function fetchJoke() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();


        console.log("--- Random Chuck Norris Joke ---");
        console.log(data.value);

    } catch (error) {
        console.error("Failed to fetch Chuck Norris joke:", error);
    }
}

fetchJoke();