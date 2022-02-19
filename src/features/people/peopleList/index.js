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
  selectTotalPeopleResults
} from "./peopleListSlice";

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
    < Container >
      <section>
        <Title>
          {`${!!query && query.length !== ""
            ? `Search results for "${query.toUpperCase()}" (${totalResults})`
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
      </section>
    </Container >
  )
};