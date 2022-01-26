import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  margin: 16px 0 8px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
`;

export const Year = styled.p`
  margin: 8px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 150%;
`;

export const TagsLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.grayButton};
  border-radius: 5px;
  font-size: 14px;
`;

export const RatingLine = styled.div`
  margin-top: 39px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const Rating = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const Votes = styled(Rating)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grayText};
`;