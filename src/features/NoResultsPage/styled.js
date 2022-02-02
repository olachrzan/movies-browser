import styled from "styled-components";

export const NoResultsText = styled.p`
  font-weight: 600;
  font-size: 33px;
  letter-spacing: -0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 22px;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 200px;
  }
`;
