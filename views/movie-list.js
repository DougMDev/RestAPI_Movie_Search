const setEditModal = (isbn) => {};

const deleteMovie = (isbn) => {};

const loadMovies = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/movies", false);
  xhttp.send();

  const movies = JSON.parse(xhttp.responseText);

  for (let movie of movies) {
    console.log(movie);
    const q = `
        <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.isbn}</h6>

                        <div>Genre: ${movie.genre}</div>
                        <div>Rating: ${movie.rating}</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editMovieModal" onClick="setEditModal(${movie.isbn})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.getElementById("movies").innerHTML = document.getElementById(
      "movies"
    ).innerHTML = q;
  }
};

loadMovies();
