import { nanoid } from "@reduxjs/toolkit";
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
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { Section } from "../../../common/section";
import { NoResultsPage } from "../../../common/NoResultsPage";
import posterError from "../../../images/posterError.png";
import { useQueryParameter } from "../../../queryParameters";

export const MovieList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const totalResults = useSelector(selectTotalResults);
  const query = useQueryParameter("search");
  const page = useQueryParameter("page");

  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies({ query, page }));
  }, [dispatch, query, page]);

  return (
    <Container>
      {(page && query && error) || totalResults === 0 ? <NoResultsPage />
        :
        <Section last>
          {loading
            ?
            <>
              <Title>
                {`${query
                  ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"`
                  : "Popular movies"}`}
              </Title>
              <Loader />
            </>
            : error ? <ErrorPage />
              : (
                <>
                  <Title>
                    {`${query
                      ? `Search results for "${query[0].toUpperCase() + query.slice(1)}" (${totalResults})`
                      : "Popular movies"}`}
                  </Title>
                  <Wrapper>
                    {[...movies].map((movie) => {
                      return <WrapperLink key={nanoid()} to={`/movie/${movie.id}`} >
                        <Tile
                          poster={
                            movie.poster_path
                              ? `${apiUrlImage}w500/${movie.poster_path}`
                              : posterError
                          }
                          title={movie.title}
                          year={movie.release_date ? (movie.release_date).slice(0, 4) : "year: unknown"}
                          genres={movie.genre_ids}
                          rating={movie.vote_average}
                          voteCount={movie.vote_count}
                          overview={movie.overview ? movie.overview : "Overview: Unknown!"}
                        />
                      </WrapperLink>
                    })}
                  </Wrapper>
                  <Pagination />
                </>
              )
          }
        </Section>
      }
    </Container >
  )
};