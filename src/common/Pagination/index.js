import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const locationHash = window.location.hash;
    const page = useSelector(
        locationHash === "#/movie" ? selectPage : selectPeoplePage
    );
    const totalPage = useSelector(
        locationHash === "#/movie" ? selectTotalPages : selectPeopleTotalPage
    );

    const goToFirst = () => {
        dispatch(
            locationHash === "#/movie" ? setPage(1) : setPeoplePage(1)
        )
    };

    const goToPrevious = () => {
        dispatch(
            locationHash === "#/movie" ? setPage(page - 1) : setPeoplePage(page - 1)
        )
    };

    const goToNext = () => {
        dispatch(
            locationHash === "#/movie" ? setPage(page + 1) : setPeoplePage(page + 1)
        )
    };

    const goToLast = () => {
        dispatch(
            locationHash === "#/movie" ? setPage(totalPage) : setPeoplePage(totalPage)
        )
    };

    return (
        <Wrapper>
            <Button disabled={page === 1} onClick={goToFirst} >
                <ArrowIcon mobile="true" />
                <ArrowIcon />
                <ButtonText>First</ButtonText>
            </Button>
            <Button disabled={page === 1} onClick={goToPrevious} >
                <ArrowIcon />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageInfo>
                Page
                <Span>{page}</Span>
                of
                <Span last>{totalPage}</Span>
            </PageInfo>
            <Button next disabled={page === totalPage} onClick={goToNext} >
                <ButtonText>Next</ButtonText>
                <ArrowIconNext />
            </Button>
            <Button next disabled={page === totalPage} onClick={goToLast} >
                <ButtonText>Last</ButtonText>
                <ArrowIconNext mobile="true" />
                <ArrowIconNext />
            </Button>
        </Wrapper>
    );
};