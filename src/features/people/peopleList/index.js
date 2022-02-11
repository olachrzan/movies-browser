import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { PersonTile } from "../PersonTile";
import { fetchPeople, selectPeopleError, selectPeopleList, selectPeopleLoading } from "./peopleListSlice";
import { Wrapper } from "./styled";
import { WrapperLink } from "../../../common/wrapperLink";
import { apiUrlImage } from "../../apiData";
import { Pagination } from "../../../common/Pagination";
import { Loader } from "../../../common/Loader";
import { Title } from "../../../common/Title/styled";
import { ErrorPage } from "../../../common/ErrorPage";
import posterError from "../PersonTile/posterError.jpg";


export const PeopleList = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeopleList);
  const loading = useSelector(selectPeopleLoading);
  const error = useSelector(selectPeopleError);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch])

  return (
    < Container >
      <Title>Popular people</Title>
      {loading ? <Loader />
        : error ? <ErrorPage />
          :
          <>
            <Wrapper>
              {[...people].slice(0, 18).map((person) => {
                return (
                  <WrapperLink key={person.id} to={`/people/${person.id}`}>
                    <PersonTile
                      poster={person.profile_path
                        ? `${apiUrlImage}w300/${person.profile_path}`
                        : posterError}
                      name={person.name}
                    />
                  </WrapperLink>
                )
              })}
            </Wrapper>
            <Pagination />
          </>
      }
    </Container >
  )
};