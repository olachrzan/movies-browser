import styled, { css } from "styled-components";
import { ReactComponent as arrow } from "./arrow.svg";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 5px;
    font-size: 14px;
    border: none;
    background: #D6E4FF;
    margin: 0px 6px;

    
`;

export const Text = styled.span`

`;

export const ArrowIcon = styled(arrow)`
    color: #0044CC;
    margin-right: 8px;

    ${({ next }) => next && css`
        transform: rotate(180deg);
        margin-right: 0px;
        margin-left: 8px;
    `}
`;