import styled from "styled-components";

export const LoaderContainer = styled.div`
  max-width: 1408px;
  padding: 0px 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 0px;
  }
`;

export const LoadingText = styled.p`
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
  padding: 45px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 24px 0px;
  }
`;

export const Loader = styled.img`
  width: 60px;
  animation: rotating 1s linear infinite;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 45px;
  }
`;
