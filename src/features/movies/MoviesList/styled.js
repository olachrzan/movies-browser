import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 24px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;