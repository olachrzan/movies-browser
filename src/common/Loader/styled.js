import styled, { keyframes } from "styled-components";
import { ReactComponent as loading } from "./loading.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Loading = styled(loading)`
  animation: ${rotate} 1s linear infinite;
`;