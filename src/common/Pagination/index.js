import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  Wrapper,
  ArrowIcon,
  ArrowIconNext,
  Button,
  ButtonText,
  PageInfo,
  Span
} from "./styled";
import { selectPage, selectTotalMoviesPages, setPage } from "../../features/movies/MovieList/movieListSlice";
import {
  selectPeoplePage,
  selectPeopleTotalPage,
  setPeoplePage
} from "../../features/people/peopleList/peopleListSlice";
import { useReplacePageParameter } from "./pageParameters";


export const Pagination = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname);
  const page = useSelector(
    pathname === "/movie" ? selectPage : selectPeoplePage
  );
  const totalPage = useSelector(
    pathname === "/movie" ? selectTotalMoviesPages : selectPeopleTotalPage
  );

  const replacePageParameter = useReplacePageParameter();

  const goToAnotherPage = () => {
    replacePageParameter(page)
  };

  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => goToAnotherPage(1)} >
        <ArrowIcon mobile="true" />
        <ArrowIcon />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1} onClick={() => goToAnotherPage(page - 1)} >
        <ArrowIcon />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageInfo>
        Page
        <Span>{page}</Span>
        of
        <Span last>{totalPage}</Span>
      </PageInfo>
      <Button next disabled={page === totalPage} onClick={() => goToAnotherPage(page + 1)} >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button next disabled={page === totalPage} onClick={() => goToAnotherPage(totalPage)} >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext mobile="true" />
        <ArrowIconNext />
      </Button>
    </Wrapper >
  );
};