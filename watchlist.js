$(document).ready(() => {
    var watchlistList = JSON.parse(localStorage.getItem("watchlist"));
    console.log("this is the parsed 'watchlist' from local storage" + watchlistList);

    function renderMovies(watchlist) {
        var movieHTMLs = watchlist.map((currentMovie) => {
            console.log("currentMovie" + currentMovie);
            return `<div class="movie-card" style="width: 200px;">
                <img class="movie-card-img-top" src="${currentMovie.Poster}" alt="Movie card image cap" height="300px" width="200px">
                <div class="movie-card-body">
                    <h5 class="movie-card-title">${currentMovie.Title}</h5>
                    <p class="movie-card-release-date">${currentMovie.Year}</p>
                <button type="button" class="remove-button">Remove!</button>
                </div>
            </div>`
    
        })

        console.log(movieHTMLs);
        return movieHTMLs.join("");
    }

    $(".movies-container").html(renderMovies(watchlistList));
})

//use filter to activate the remove button