import styled, { css, keyframes } from "styled-components";
import { ReactComponent as arrow } from "./arrow.svg";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const move = keyframes`
   0% {
      transform: translateX(0px);
   }
   25% {
    transform: translateX(-4px);
   }
   50% {
    transform: translateX(0px);
   }
   75% {
    transform: translateX(4px);
   }
   100% {
    transform: translateX(0px);
   }
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 5px;
    font-size: 14px;
    border: none;
    background: ${({ theme }) => theme.colors.lightBlueButton};
    margin: 0px 6px;

    @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
        &:hover{
            animation: ${move} 1s linear infinite;
        }
    }
    
    ${({ next }) => next && css`
        @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
            &:hover{
                animation: ${move} 1s linear infinite reverse;
            }
        } 
    `}

    &:disabled{
        background: ${({ theme }) => theme.colors.grayButton};
        color: ${({ theme }) => theme.colors.darkText};
        pointer-events: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: 8px 12px;
    }
`;

export const TextButton = styled.span`

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
    }
`;

export const ArrowIcon = styled(arrow)`
    color: ${({ theme }) => theme.colors.darkBlueButton};
    margin-right: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin: 0px;
        width: 5px;
        height: 8px;
    }

    ${({ next }) => next && css`
        transform: rotate(180deg);
        margin-right: 0px;
        margin-left: 8px;
        color: ${({ theme }) => theme.colors.darkBlueButton};
    `}

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.colors.grayText};
    `}

    ${({ mobile }) => mobile && css`
        display: none;
        
        @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
            display: block;
            margin-right: 4px;
        }
    `}
`;

export const PageInfo = styled.p`
    margin: 0px 10px 0px 18px;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin: 0px 0px 0px 3px;
        font-size: 12px;
    }
`;

export const Span = styled.span`
    font-weight: 600;
    margin: 0px 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin: 0px 3px;
    }
`;

