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

const Pagination = () => {

    return (
        <Wrapper>
            <Button disabled>
                <ArrowIcon disabled mobile="true" />
                <ArrowIcon disabled/>
                <ButtonText>First</ButtonText>
            </Button>
            <Button>
                <ArrowIcon />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageInfo>
                Page
                <Span>1</Span>
                of
                <Span> 500</Span>
            </PageInfo>
            <Button>
                <ButtonText>Next</ButtonText>
                <ArrowIconNext/>
            </Button>
            <Button>
                <ButtonText>Last</ButtonText>
                <ArrowIconNext mobile="true" />
                <ArrowIconNext />
            </Button>
        </Wrapper>
    );
};

export default Pagination;