import axios from "axios";
import { apiUrlSearchMovies } from "./apiData";
import { useState } from "react";

export const getApi = async (apiUrl) => {
  const response = await axios.get(apiUrl);

  return await response.data;
};

export const FetchSearchMovies = async (query, id) => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const response = await fetch(apiUrlSearchMovies + id + query);
  const data = response.json();
  if (response.status > 400) {
    throw new Error(data.error);
  }

  return setMoviesSearch(data.results);
};
