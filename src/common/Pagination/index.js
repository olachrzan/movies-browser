import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { usePageParameter, useReplacePageParameter } from "./pageParameters";
import {
  Wrapper,
  ArrowIcon,
  ArrowIconNext,
  Button,
  ButtonText,
  PageInfo,
  Span
} from "./styled";
import {
  selectPage,
  selectTotalPages,
  setPage
} from "../../features/movies/MovieList/movieListSlice";
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
  const pageParamValue = usePageParameter();
  const replacePageParameter = useReplacePageParameter();

  useEffect(() => {
    if (page === 1)
      replacePageParameter(1);
  }, []);

  useEffect(() => {
    const pageFromURL = Number(pageParamValue);
    if (pageFromURL !== page && pageFromURL > 0 && pageFromURL <= totalPage) {
      dispatch(
        pathname === "/movie" ? setPage(pageFromURL) : setPeoplePage(pageFromURL)
      );
    }
  });

  const goToAnotherPage = (pageNumber) => {
    dispatch(
      pathname === "/movie" ? setPage(pageNumber) : setPeoplePage(pageNumber)
    );
    replacePageParameter(pageNumber);
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
    </Wrapper>
  );
};