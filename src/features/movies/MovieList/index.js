import { Pagination } from "../../../common/Pagination";
import { MovieTile } from "../MovieTile"
import { Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { selectMovies } from "./movieListSlice";
import { apiUrlImage } from "../../apiData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./movieListSlice";
import { Title } from "../../../common/Title/styled";

export const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Title>Popular movies</Title>
      <Wrapper>
        {[...movies].map((movie, index) => {
          return <MovieTile key={index}
            poster={`${apiUrlImage}w500/${movie.poster_path}`} //here we need to change the image for mobile phones 
            title={movie.title}
            year={(movie.release_date).slice(0, 4)}
            genres={movie.genre_ids}
            rating={movie.vote_average}
            voteCount={movie.vote_count}
          />
        })}
      </Wrapper>
      <Pagination />
    </>
  )
};