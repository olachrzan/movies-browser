import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { selectTotalMoviesPages } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";
import { useQueryParameter } from "../../useQueryParameter";
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
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const pageParameter = +useQueryParameter("page");
  const page = pageParameter === 0 ? 1 : pageParameter;

  const totalPage = useSelector(
    location.pathname === "/movie" ? selectTotalMoviesPages : selectPeopleTotalPage
  );

  const totalCurrentPage = totalPage > 500 ? 500 : totalPage;

  const goToAnotherPage = (page) => {
    if (page === "") {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
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
  );
};