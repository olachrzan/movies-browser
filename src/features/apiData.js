export const apiKey = "65f0040ec23653aeaba018e96e0fe430";

const apiUrl = "https://api.themoviedb.org/3/";

export const apiUrlPopularMovies = `${apiUrl}movie/popular?api_key=`;
export const apiUrlDetails = `${apiUrl}movie/{movie_id}?api_key=`; //movie details
export const apiUrlCredits = `${apiUrl}movie/{movie_id}/credits?api_key=`; //cast and crew
export const apiUrlPerson = `${apiUrl}person/{person_id}?api_key=`; // personal data
export const apiUrlPopularPeople = `${apiUrl}person/popular?api_key=`; // popular people
export const apiUrlMovieCredits = `${apiUrl}person/{person_id}/movie_credits?api_key=`; // cast and crew for person

export const apiUrlConfiguration = `${apiUrl}configuration?api_key=`; // images size



