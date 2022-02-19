import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { selectTotalMoviesPages, selectTotalResults } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";
import { useReplaceQueryParameter, useQueryParameter } from "../../queryParameters";
import {
  Wrapper,
  ArrowIcon,
  ArrowIconNext,
  Button,
  ButtonText,
  PageInfo,
  Span
} from "./styled";

export const Pagination = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();
  const totalResults = useSelector(selectTotalResults);
  const totalPeopleResults = useSelector(selectPeopleTotalPage);
  const pageParameter = +useQueryParameter("page");
  const page = pageParameter === 0 ? 1 : pageParameter;

  const totalPage = useSelector(
    location.pathname === "/movie" ? selectTotalMoviesPages : selectPeopleTotalPage
  );

  const totalCurrentPage = totalPage > 500 ? 500 : totalPage;

  const goToAnotherPage = (page) => {
    replaceQueryParameter({
      value: page,
      key: "page",
    });
  };

  return (
    totalResults <= 20 || totalPeopleResults <= 20
      ? ""
      : (
        < Wrapper >
          <Button disabled={page === 1}
            onClick={() => goToAnotherPage(1)}
          >
            <ArrowIcon mobile="true" />
            <ArrowIcon />
            <ButtonText>First</ButtonText>
          </Button>
          <Button disabled={page === 1}
            onClick={() => goToAnotherPage(page - 1)}
          >
            <ArrowIcon />
            <ButtonText>Previous</ButtonText>
          </Button>
          <PageInfo>
            Page
            <Span>{page}</Span>
            of
            <Span last>{totalCurrentPage}</Span>
          </PageInfo>
          <Button next disabled={page === totalCurrentPage}
            onClick={() => goToAnotherPage(page + 1)}
          >
            <ButtonText>Next</ButtonText>
            <ArrowIconNext />
          </Button>
          <Button next disabled={page === totalCurrentPage}
            onClick={() => goToAnotherPage(totalCurrentPage)}
          >
            <ButtonText>Last</ButtonText>
            <ArrowIconNext mobile="true" />
            <ArrowIconNext />
          </Button>
        </Wrapper >
      )
  );
};