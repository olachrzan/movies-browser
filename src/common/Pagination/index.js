import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  ArrowIcon,
  ArrowIconNext,
  Button,
  ButtonText,
  PageInfo,
  Span
} from "./styled";
import { selectPage, selectTotalPages, setPage } from "../../features/movies/MovieList/movieListSlice";
import {
  selectPeoplePage,
  selectPeopleTotalPage,
  setPeoplePage
} from "../../features/people/peopleList/peopleListSlice";


export const Pagination = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const page = useSelector(
    pathname === "/movie" ? selectPage : selectPeoplePage
  );
  const totalPage = useSelector(
    pathname === "/movie" ? selectTotalPages : selectPeopleTotalPage
  );

  const goToAnotherPage = (pageNumber) => {
    dispatch(
      pathname === "/movie" ? setPage(pageNumber) : setPeoplePage(pageNumber)
    );
  }

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
    </Wrapper>
  );
};