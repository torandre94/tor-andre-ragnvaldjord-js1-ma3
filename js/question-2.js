const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    try {
    const response = await fetch(url);

    const results = await response.json();

    const games = results.results;

    resultsContainer.innerHTML = ""

    for (let i = 0; i < games.length; i++) {
        
        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML +=  `<div class="result">
                                        <p>Name: ${games[i].name}</p>
                                        <p>Rating: ${games[i].rating}</p>
                                        <p>Number of tags: ${games[i].tags.length}</p>
                                        </div>`
    }
    }
    catch(error) {
        resultsContainer.innerHTML = "Something went wrong, an error has occurred!"
    }
}

getGames();
