import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { fetchPeopleDetails, selectError } from "./peopleDetailsSlice";

export const PeopleDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const error = useSelector(selectError);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        dispatch(fetchPeopleDetails({ id }));
    }, [dispatch, id]);

    return (
        <Container>
            <>asdf</>
        </Container>
    )
};