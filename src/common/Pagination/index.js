import React from "react";
import {
    Wrapper,
    ArrowIcon,
    Button,
    TextButton,
    PageInfo,
    Span
} from "./styled";

const Pagination = () => {

    return (
        <Wrapper>
            <Button disabled>
                <ArrowIcon disabled mobile="true" />
                <ArrowIcon disabled/>
                <TextButton>First</TextButton>
            </Button>
            <Button>
                <ArrowIcon />
                <TextButton>Previous</TextButton>
            </Button>
            <PageInfo>
                Page
                <Span>1</Span>
                of
                <Span> 500</Span>
            </PageInfo>
            <Button next>
                <TextButton>Next</TextButton>
                <ArrowIcon next="true" />
            </Button>
            <Button next>
                <TextButton>Last</TextButton>
                <ArrowIcon mobile="true" next="true" />
                <ArrowIcon next="true" />
            </Button>
        </Wrapper>
    );
};

export default Pagination;