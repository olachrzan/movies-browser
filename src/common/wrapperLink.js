import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkText};
    transition: transform .4s;
    
    &:hover{
        transform: scale(1.04);
    }
`;