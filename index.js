$(document).ready( () => {
    function renderMovies(movieArray) {
        let movieHTMLs = movieArray.map((currentMovie) => {

            return `<div class="movie-card" style="width: 200px;">
                <img class="movie-card-img-top" src="${currentMovie.Poster}" alt="Movie card image cap" height="300px" width="200px">
                <div class="movie-card-body">
                    <h5 class="movie-card-title">${currentMovie.Title}</h5>
                    <p class="movie-card-release-date">${currentMovie.Year}</p>
                <button type="button" onclick="saveToWatchlist('${currentMovie.imdbID}')" class="add-button">Add!</button>
                </div>
            </div>`

        })
        return movieHTMLs.join("");
    }
    

   $("#search-form").submit((e) => {
    e.preventDefault();

    let searchString = $(".search-bar").val();
    let urlEncodedSearchString = encodeURIComponent(searchString); // turns spaces into %20
    fetch(`http://www.omdbapi.com/?apikey=8534d2a7&s=${urlEncodedSearchString}`)
        .then(response => response.json())
        .then((response) => {
            $(".movies-container").html(renderMovies(response.Search));
        })
   });

})

function saveToWatchlist(imdbID) {
    fetch(`http://www.omdbapi.com/?apikey=8534d2a7&i=${imdbID}`)
        .then(response => response.json())
        .then((response) => {
            let watchlistJSON = localStorage.getItem("watchlist");
            let watchlist = JSON.parse(watchlistJSON); 
            if (watchlist === null) { 
                watchlist = [];
            }
            watchlist.push(response); 
            watchlistJSON = JSON.stringify(watchlist); 
            localStorage.setItem("watchlist", watchlistJSON); 

        })

}
