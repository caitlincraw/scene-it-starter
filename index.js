$(document).ready( () => {
    console.log("jQuery is Running")

    function renderMovies(movieArray) {
        let movieHTMLs = movieArray.map((currentMovie) => {
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

    let searchString = $(".search-bar").val();
    // console.log(searchString);
    let urlEncodedSearchString = encodeURIComponent(searchString); // turns spaces into %20
    // console.log(urlEncodedSearchString);
    fetch(`http://www.omdbapi.com/?apikey=8534d2a7&s=${urlEncodedSearchString}`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            console.log(response.Search);
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

    // let movie = movieData.find((currentMovie) => { //find method only returns a single element; use filter method if want to return multiple values
    //     return currentMovie.imdbID === imdbID; //compares currentMovie.imdb and returns value only if the same as currentMovie.imdbID within the onclick event
    // });

}
