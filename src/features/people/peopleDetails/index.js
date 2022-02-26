import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { fetchPeopleDetails, selectError, selectLoading } from "./peopleDetailsSlice";
import { ErrorPage } from "../../../common/ErrorPage";
import { PersonInfo } from "./PersonInfo";
import { MovieCast } from "./MovieCast";
import { MovieCrew } from "./MovieCrew";
import { Loader } from "../../../common/Loader";

export const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchPeopleDetails({ id }));
  }, [dispatch, id]);

  return (
    <Container>
      {loading
        ? <Loader />
        : error
          ? <ErrorPage />
          :
          <>
            <PersonInfo />
            <MovieCast />
            <MovieCrew />
          </>
      }
    </Container>
  )
};