import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { PersonTile } from "../../../common/PersonTile";
import { Wrapper } from "./styled";
import { WrapperLink } from "../../../common/WrapperLink/styled";
import { apiUrlImage } from "../../apiData";
import { Pagination } from "../../../common/Pagination";
import { Loader } from "../../../common/Loader";
import { Title } from "../../../common/Title/styled";
import { ErrorPage } from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../queryParameters";
import { Section } from "../../../common/Section/styled";
import personError from "../../../images/personError.jpg";
import { NoResultsPage } from "../../../common/NoResultsPage";
import {
  fetchPeople,
  selectPeopleError,
  selectPeopleList,
  selectPeopleLoading,
  selectTotalPeopleResults
} from "./peopleListSlice";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectPeopleLoading);
  const error = useSelector(selectPeopleError);
  const people = useSelector(selectPeopleList);
  const totalResults = useSelector(selectTotalPeopleResults);
  const query = useQueryParameter("search");
  const page = useQueryParameter("page");

  useEffect(() => {
    dispatch(fetchPeople({ query, page }));
  }, [dispatch, query, page]);

  return (
    <Container >
      {(page && query && error) || totalResults === 0
        ? <NoResultsPage />
        :
        <Section last>
          {loading
            ?
            <>
              <Title>
                {!!query && query.length !== ""
                  ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"`
                  : "Popular people"
                }
              </Title>
              <Loader />
            </>
            : error
              ? <ErrorPage />
              :
              <>
                <Title>
                  {!!query && query.length !== ""
                    ? `Search results for "${query[0].toUpperCase() + query.slice(1)}" (${totalResults})`
                    : "Popular people"
                  }
                </Title>
                <Wrapper>
                  {[...people].map((person) => {
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
        </Section>
      }
    </Container >
  )
};