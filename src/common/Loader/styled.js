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
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

export const Loading = styled(loading)`
  animation: ${rotate} 1s linear infinite;
`;