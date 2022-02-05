import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import { PersonTile } from "./PersonTile";
import { fetchPeople, selectPeopleList, selectPeopleLoading } from "./peopleListSlice";
import { Wrapper } from "./styled";
import { WrapperLink } from "../../../common/wrapperLink";
import { apiUrlImage } from "../../apiData";
import { Pagination } from "../../../common/Pagination";
import { LoadingPage } from "../../../common/LoadingPage";


export const PeopleListPage = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeopleList);
  const loading = useSelector(selectPeopleLoading);
  console.log(loading);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch])

  return (
    < Container >
      {loading ? <LoadingPage />
        :
        <>
          <Wrapper>
            {[...people].slice(0, 18).map((person) => {
              return (
                <WrapperLink key={person.id} to={`/people/${person.id}`}>
                  <PersonTile
                    poster={`${apiUrlImage}w300/${person.profile_path}`}
                    name={person.name}
                  />
                </WrapperLink>
              )
            })}
          </Wrapper>
        </>
      }
      <Pagination />
    </Container >
  )
};