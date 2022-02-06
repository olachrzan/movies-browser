import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "./movieDetailsSlice";
import Container from "../../../common/Container";
import { selectMovieDetails } from "./movieDetailsSlice";
import { MovieTile } from "../MovieTile";
import { apiUrlImage } from "../../apiData";
import { MovieHeader } from "./MovieHeader";

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails({ id }));
  }, [dispatch, id]);

  return (
    <>
      <MovieHeader />
      <Container>
        <MovieTile
          poster={`${apiUrlImage}w300/${movieDetails.poster_path}`}
          title={movieDetails.original_title}
        />
      </Container>
    </>
  )
};

