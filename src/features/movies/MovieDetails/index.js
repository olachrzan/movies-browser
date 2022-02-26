import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMovieError } from "./movieDetailsSlice";
import { Container } from "../../../common/Container";
import { MovieHeader } from "./MovieHeader";
import { MovieInfo } from "./MovieInfo";
import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { ErrorPage } from "../../../common/ErrorPage";

export const MovieDetails = () => {
  const { id } = useParams();
  const movieError = useSelector(selectMovieError);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    dispatch(fetchMovieDetails({ id }));
  }, [dispatch, id]);

  return (
    <>
      {movieError
        ? <ErrorPage />
        : (
          <>
            <MovieHeader />
            <Container>
              <MovieInfo />
              <Cast />
              <Crew />
            </Container>
          </>
        )
      }
    </>
  )
};

