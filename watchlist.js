$(document).ready(() => {
    let watchlistList = JSON.parse(localStorage.getItem("watchlist"));

    function renderMovies(watchlist) {
        let movieHTMLs = watchlist.map((currentMovie) => {
            return `<div class="movie-card" style="width: 200px;">
                <img class="movie-card-img-top" src="${currentMovie.Poster}" alt="Movie card image cap" height="300px" width="200px">
                <div class="movie-card-body">
                    <h5 class="movie-card-title">${currentMovie.Title}</h5>
                    <p class="movie-card-release-date">${currentMovie.Year}</p>
                <button type="button" class="remove-button">Remove!</button>
                </div>
            </div>`
    
        })

        return movieHTMLs.join("");
    }

    $(".movies-container").html(renderMovies(watchlistList));
})
