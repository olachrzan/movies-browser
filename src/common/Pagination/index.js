import React from "react";
import {
    Wrapper,
    ArrowIcon,
    Button,
    Text
} from "./styled";

export default Pagination => {

    return (
        <Wrapper>
            <Button>
                <ArrowIcon />
                <Text>First</Text>
            </Button>
            <Button>
                <ArrowIcon />
                <Text>Previous</Text>
            </Button>
            <p>
                Page
                <span>1</span>
                of
                <span>500</span>
            </p>
            <Button>
                <Text>Next</Text>
                <ArrowIcon next="true" />
            </Button>
            <Button>
                <Text>Last</Text>
                <ArrowIcon next="true" />
            </Button>
        </Wrapper>
    );
};