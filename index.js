$(document).ready( () => {
    console.log("jQuery is Running")

    function renderMovies(movieArray) {
        var movieHTMLs = movieArray.map((currentMovie) => {
            // console.log(currentMovie);
            // console.log(currentMovie.Title);
            return `<div class="movie-card" style="width: 200px;">
                <img class="movie-card-img-top" src="${currentMovie.Poster}" alt="Movie card image cap" height="300px" width="200px">
                <div class="movie-card-body">
                    <h5 class="movie-card-title">${currentMovie.Title}</h5>
                    <p class="movie-card-release-date">${currentMovie.Year}</p>
                <button type="button" onclick="saveToWatchlist('${currentMovie.imdbID}')" class="add-button">Add!</a>
                </div>
            </div>`

        })
        console.log(movieHTMLs);
        return movieHTMLs.join("");
    }
    

   $("#search-form").submit((e) => {
    e.preventDefault();
    $(".movies-container").html(renderMovies(movieData));
   });

})

function saveToWatchlist(imdbID) {
    var movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == imdbID;
    });

    var watchlistJSON = localStorage.getItem("watchlist");
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist === null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);
}
