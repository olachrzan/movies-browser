import styled from "styled-components";
import { ReactComponent as star } from "./star.svg";

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.tileBoxShadow};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    flex-direction: row;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: fit-content;
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 40%;
  }
`;

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    margin-left: 16px;
  }
`;

export const Title = styled.h3`
  margin: 16px 0 8px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-size: 16px;
    margin: 0 0 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 4vw;
  }
`;

export const Year = styled.p`
  flex: 1 1 auto;
  margin: 0 0 8px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 150%;
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-size: 13px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 2.5vw;
  }
`;

export const TagsLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.p`
  margin: 0;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.grayButton};
  border-radius: 5px;
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    padding: 4px 8px;
    font-size: 10px; 
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 1vw 2vw;
    font-size: 2vw;
  }
`;

export const RatingLine = styled.div`
  flex: 1 1 auto;
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-end;
  gap: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    gap: 8px;
  }
`;

export const Star = styled(star)`
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 16px;
    height: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 3vw;
    height: 3vw;
  }
`;

export const Rating = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    font-size: 13px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 3vw;
  }
`;

export const Votes = styled(Rating)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grayText};
`;