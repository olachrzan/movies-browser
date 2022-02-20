import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { PersonTile } from "../../../common/PersonTile";
import { Wrapper } from "./styled";
import { WrapperLink } from "../../../common/wrapperLink";
import { apiUrlImage } from "../../apiData";
import { Pagination } from "../../../common/Pagination";
import { Loader } from "../../../common/Loader";
import { Title } from "../../../common/Title/styled";
import { ErrorPage } from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../queryParameters";
import personError from "../../../images/personError.jpg";
import {
  fetchPeople,
  selectPeopleError,
  selectPeopleList,
  selectPeopleLoading,
  selectTotalPeopleResults,
} from "./peopleListSlice";
import { NoResultsPage } from "../../../common/NoResultsPage";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectPeopleLoading);
  const error = useSelector(selectPeopleError);
  const totalResults = useSelector(selectTotalPeopleResults);
  const query = useQueryParameter("search");
  const page = useQueryParameter("page");

  const people = useSelector(selectPeopleList);

  useEffect(() => {
    dispatch(fetchPeople({ query, page }));
  }, [dispatch, query, page]);

  return (
    <Container>
      <section>
        <Title>
          {totalResults.length === 0
              ? `Sorry, there are no results for "${query}"` : `${
            !!query && query.length !== ""
              ? `Search results for "${
                  query[0].toUpperCase() + query.slice(1)
                }" (${totalResults})`
              : "Popular people"
          }`}
        </Title>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorPage />
        ) : people.length === 0 ? (
          <NoResultsPage />
        ) : (
          <>
            <Wrapper>
              {[...people].map((person) => {
                return (
                  <WrapperLink key={person.id} to={`/people/${person.id}`}>
                    <PersonTile
                      poster={
                        person.profile_path
                          ? `${apiUrlImage}w300/${person.profile_path}`
                          : personError
                      }
                      name={person.name}
                    />
                  </WrapperLink>
                );
              })}
            </Wrapper>
            <Pagination />
          </>
        )}
      </section>
    </Container>
  );
};
