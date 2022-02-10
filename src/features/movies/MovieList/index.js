import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container";
import { MovieTile } from "../MovieTile"
import { Wrapper} from "./styled";
import { useSelector } from "react-redux";
import { apiUrlImage } from "../../apiData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, selectLoading, selectMovieError, selectMovies} from "./movieListSlice";
import { Title } from "../../../common/Title/styled";
import { WrapperLink } from "../../../common/wrapperLink";
import { nanoid } from "@reduxjs/toolkit";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";

export const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectMovieError);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <Container>
      <Title>Popular movies</Title>
      {loading
        ? <Loader />
        : error ? <ErrorPage />
          : (
            <>
              <Wrapper>
                {[...movies].map((movie) => {
                  return <WrapperLink key={nanoid()} to={`/movie/${movie.id}`} >
                    <MovieTile
                      poster={`${apiUrlImage}w500/${movie.poster_path}`} //here we need to change the image for mobile phones 
                      title={movie.title}
                      year={(movie.release_date).slice(0, 4)}
                      genres={movie.genre_ids}
                      rating={movie.vote_average}
                      voteCount={movie.vote_count}
                      overview={movie.overview}
                    />
                  </WrapperLink>
                })}
              </Wrapper>
            </>
          )
      }
      <Pagination />
    </Container >
  )
};