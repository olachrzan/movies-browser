import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails, selectMovieDetails } from "./movieDetailsSlice";
import Container from "../../../common/Container";
import { MovieTile } from "../MovieTile";
// import { apiUrlImage } from "../../apiData";

function MovieDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(selectMovieDetails);

    useEffect(() => {
        dispatch(fetchMovieDetails({ id }))
    }, [dispatch, id]);

    return (
        <Container>
            <MovieTile
            // poster={`${apiUrlImage}w500/${poster_path}`}
            // title={movie.original_title}
            />
        </Container>
    )
};

export default MovieDetailsPage;
