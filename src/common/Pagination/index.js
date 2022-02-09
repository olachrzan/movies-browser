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
            <Button disabled onClick={() => dispatch(setPage(1))}>
                <ArrowIcon disabled mobile="true" />
                <ArrowIcon disabled />
                <ButtonText>First</ButtonText>
            </Button>
            <Button onClick={() => dispatch(setPage(page - 1))}>
                <ArrowIcon />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageInfo>
                Page
                <Span>{page}</Span>
                of
                <Span> {totalPage}</Span>
            </PageInfo>
            <Button onClick={() => dispatch(setPage(page + 1))}>
                <ButtonText>Next</ButtonText>
                <ArrowIconNext />
            </Button>
            <Button onClick={() => dispatch(setPage(totalPage))}>
                <ButtonText>Last</ButtonText>
                <ArrowIconNext mobile="true" />
                <ArrowIconNext />
            </Button>
        </Wrapper>
    );
};