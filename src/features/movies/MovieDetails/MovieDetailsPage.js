import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovieDetails } from "./movieDetailsSlice";
import Container from "../../../common/Container";
import { MovieHeader } from "./MovieHeader";
import { Title } from "../../../common/Title/styled";
import { MovieInfo } from "./MovieInfo";

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieDetails({ id }));
  }, [dispatch, id]);

  return (
    <>
      <MovieHeader />
      <Container>
        <MovieInfo />
        <Title>Cast</Title>
      </Container>
    </>
  )
};

