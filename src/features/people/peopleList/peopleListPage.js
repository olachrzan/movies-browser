import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Container } from "../../../common/Container";
import { PersonTile } from "../../../common/PersonTile";
import { fetchPeople, selectPeopleError, selectPeopleList, selectPeopleLoading } from "./peopleListSlice";
import { Wrapper } from "./styled";
import { WrapperLink } from "../../../common/wrapperLink";
import { apiUrlImage } from "../../apiData";
import { Pagination } from "../../../common/Pagination";
import { Loader } from "../../../common/Loader";
import { Title } from "../../../common/Title/styled";
import { ErrorPage } from "../../../common/ErrorPage";
import personError from "../../../images/personError.jpg";


export const PeopleListPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const loading = useSelector(selectPeopleLoading);
  const error = useSelector(selectPeopleError);
  const query = (new URLSearchParams(location.search)).get("query");

  const people = useSelector(selectPeopleList);
  console.log(people);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch])

  return (
    < Container >
      <Title>
        {`${!!query && query.length !== ""
          ? `Search results for "${query.toUpperCase()}" (${people.length})`
          : "Popular people"}`}
      </Title>
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
                        : personError}
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