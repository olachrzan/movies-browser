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
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   flex: 1 1 auto;
   height: 100%;
`;

export const Loading = styled(loading)`
   animation: ${rotate} 1s linear infinite;
   margin-bottom: 91px;
`;