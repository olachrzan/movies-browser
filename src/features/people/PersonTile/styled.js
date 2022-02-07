import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.tileBoxShadow};
    border-radius: 5px;
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: 8px;
    }
`;

export const Poster = styled.img`
    border-radius: 5px;
    width: 100%;               
`;

export const Name = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    text-align: center;
    margin: 12px 0px 0px 0px;
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 14px;
        margin: 8px 0px 0px 0px;
    }
`;