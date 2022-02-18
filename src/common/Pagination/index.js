import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { selectTotalMoviesPages } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";
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
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(1);
  console.log(page);
  console.log(location.pathname);
  console.log(searchParams.toString());

  const totalPage = useSelector(
    location.pathname === "/movie" ? selectTotalMoviesPages : selectPeopleTotalPage
  );

  const goToAnotherPage = () => {
    if (page <= 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page);
    }

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => goToAnotherPage(setPage(1))} >
        <ArrowIcon mobile="true" />
        <ArrowIcon />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1} onClick={() => goToAnotherPage(setPage(page - 1))} >
        <ArrowIcon />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageInfo>
        Page
        <Span>{page}</Span>
        of
        <Span last>{totalPage}</Span>
      </PageInfo>
      <Button next disabled={page === totalPage} onClick={() => goToAnotherPage(setPage(page + 1))} >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button next disabled={page === totalPage} onClick={() => goToAnotherPage(setPage(totalPage))} >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext mobile="true" />
        <ArrowIconNext />
      </Button>
    </Wrapper >
  );
};