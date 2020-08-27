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
                <button type="button" onclick="saveToWatchlist('${currentMovie.imdbID}')" class="add-button">Add!</button>
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
    var movie = movieData.find((currentMovie) => { //find method only returns a single element; use filter method if want to return multiple values
        return currentMovie.imdbID === imdbID; //compares currentMovie.imdb and returns value only if the same as currentMovie.imdbID within the onclick event
    });

    var watchlistJSON = localStorage.getItem("watchlist"); //getItem returns a string that represents the key value, in this case the "watchlist"
    var watchlist = JSON.parse(watchlistJSON); //since have a string, need to parse out specific values of the array
    if (watchlist === null) { //this if statement just creates the watchlist array on the first click of an add button
        watchlist = [];
    }
    watchlist.push(movie); //push method puts the currentMovie.imdbID into the watchlist object if the add button is clicked
    watchlistJSON = JSON.stringify(watchlist); // since we parsed it earlier, need to make the object a string again so it is valid JSON
    localStorage.setItem("watchlist", watchlistJSON); //adds the key name, "watchlist", to the key value, watchlistJSON, in localStorage

    console.log("this is watchlistJSON " + watchlistJSON);
}
