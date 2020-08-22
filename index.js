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
                <button type="button" class="add-button">Add!</a>
                </div>
            </div>`

        })
        console.log(movieHTMLs);
        return movieHTMLs.join("");
    }
    
    $(".movies-container").html(renderMovies(movieData));
});