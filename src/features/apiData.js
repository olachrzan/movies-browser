export const apiUrl = "https://api.themoviedb.org/3/";

export const apiKey = "65f0040ec23653aeaba018e96e0fe430";

export const apiUrlPopularMovies = `${apiUrl}movie/popular?api_key=${apiKey}`; // popular movies
export const apiUrlDetails = `${apiUrl}movie/157336?api_key=${apiKey}`; //movie details
export const apiUrlCredits = `${apiUrl}movie/{movie_id}/credits?api_key=${apiKey}`; //cast and crew
export const apiUrlPerson = `${apiUrl}person/{person_id}?api_key=${apiKey}`; // personal data
export const apiUrlPopularPeople = `${apiUrl}person/popular?api_key=${apiKey}`; // popular people
export const apiUrlMovieCredits = `${apiUrl}person/{person_id}/movie_credits?api_key=${apiKey}`; // cast and crew for person
export const apiUrlImage = `https://image.tmdb.org/t/p/`; // base Url for images
export const apiUrlGenres = `${apiUrl}genre/movie/list?api_key=${apiKey}`; // genre list

export const apiUrlConfiguration = `${apiUrl}configuration?api_key=${apiKey}`; // images size



