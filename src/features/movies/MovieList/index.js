import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container";
import { Tile } from "../../../common/Tile"
import { Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { apiUrlImage } from "../../apiData";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, selectLoading, selectError, selectMovies, selectTotalResults } from "./movieListSlice";
import { Title } from "../../../common/Title/styled";
import { WrapperLink } from "../../../common/wrapperLink";
import { nanoid } from "@reduxjs/toolkit";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import posterError from "../../../images/posterError.png";
import { useLocation } from "react-router";

export const MovieList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const location = useLocation();
  const totalResults = useSelector(selectTotalResults);
  const query = (new URLSearchParams(location.search)).get("search");
  const page = (new URLSearchParams(location.search)).get("page");

  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies({ query, page }));
  }, [dispatch, query, page]);

  return (
    <Container>
      <Title>
        {`${query
          ? `Search results for "${query.toUpperCase()}" (${totalResults})`
          : "Popular movies"}`}
      </Title>
      {loading
        ? <Loader />
        : error ? <ErrorPage />
          : (
            <>
              <Wrapper>
                {[...movies].map((movie) => {
                  return <WrapperLink key={nanoid()} to={`/movie/${movie.id}`} >
                    <Tile
                      poster={
                        movie.poster_path
                          ? `${apiUrlImage}w500/${movie.poster_path}` //here we need to change the image for mobile phones
                          : posterError
                      }
                      title={movie.title}
                      year={movie.release_date ? (movie.release_date).slice(0, 4) : "year: unknown"}
                      genres={movie.genre_ids}
                      rating={movie.vote_average}
                      voteCount={movie.vote_count}
                      overview={movie.overview}
                    />
                  </WrapperLink>
                })}
              </Wrapper>
              <Pagination />
            </>
          )
      }
    </Container >
  )
};