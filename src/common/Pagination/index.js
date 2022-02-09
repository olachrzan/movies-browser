import React from "react";
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
import { useDispatch, useSelector } from "react-redux";

export const Pagination = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const totalPage = useSelector(selectTotalPages);

    return (
        <Wrapper>
            <Button disabled={page === 1} onClick={() => dispatch(setPage(1))}>
                <ArrowIcon mobile="true" />
                <ArrowIcon />
                <ButtonText>First</ButtonText>
            </Button>
            <Button disabled={page === 1} onClick={() => dispatch(setPage(page - 1))}>
                <ArrowIcon />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageInfo>
                Page
                <Span>{page}</Span>
                of
                <Span> {totalPage}</Span>
            </PageInfo>
            <Button disabled={page === totalPage} onClick={() => dispatch(setPage(page + 1))}>
                <ButtonText>Next</ButtonText>
                <ArrowIconNext />
            </Button>
            <Button disabled={page === totalPage} onClick={() => dispatch(setPage(totalPage))}>
                <ButtonText>Last</ButtonText>
                <ArrowIconNext mobile="true" />
                <ArrowIconNext />
            </Button>
        </Wrapper>
    );
};