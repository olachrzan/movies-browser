import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

export const ErrorImage = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 80px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 36px;
  font-weight: 600;
  font-style: normal;
  margin: 24px;
  text-align: center;
  line-height: 140%;
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 28px;
  }
  ${({ smaller }) =>
    smaller &&
    css`
      margin-top: 0;
      font-size: 22px;
      font-weight: 500;
      padding: 10px;
      max-width: 35%;
      @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        max-width: 50%;
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 19px;
        padding: 3px;
      }
    `};
`;

export const HomepageButton = styled(Link)`
  border: none;
  font-size: 14px;
  font-weight: 700;
  max-width: fit-content;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.darkBlueButton};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  text-decoration: none;
`;
