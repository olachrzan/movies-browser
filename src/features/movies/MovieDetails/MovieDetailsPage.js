import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "./movieDetailsSlice";
import Container from "../../../common/Container";
import { selectMovieDetails } from "./movieDetailsSlice";
import { MovieTile } from "../MovieTile";
import { apiUrlImage } from "../../apiData";

export const MovieDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { movie } = useSelector(selectMovieDetails);
    // console.log(movie);
    // console.log(id);

    useEffect(() => {
        dispatch(fetchMovieDetails({ id }));
    }, [dispatch, id]);

    return (
        <Container>
            <MovieTile
            // poster={`${apiUrlImage}w500/${movie.poster_path}`}
            // title={movie.original_title}
            />

        </Container>
    )
};

