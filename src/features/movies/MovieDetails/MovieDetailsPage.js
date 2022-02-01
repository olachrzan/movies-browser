import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "./movieDetailsSlice";
import { selectMovieDetails } from "./movieDetailsSlice";
import Container from "../../../common/Container";

export const MovieDetailsPage = () => {
    const dispatch = useDispatch();
    const movie = useSelector(selectMovieDetails);
    console.log(movie);

    useEffect(() => {
        dispatch(fetchMovieDetails());
    }, [dispatch]);

    return (
        <Container>
            jgfj
        </Container>
    )
};
