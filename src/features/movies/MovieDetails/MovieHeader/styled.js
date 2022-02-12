import styled from "styled-components";
import { ReactComponent as star } from "../../../../images/star.svg";
import backgroundShadow from "./background_shadow.png";

export const Wrapper = styled.section`
    position: relative;
    margin-bottom: 64px;
    margin-top: -1px;
    
    &:after{
        content:'';
        position:absolute;
        z-index:2;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: url(${backgroundShadow}) 50% 0 no-repeat;
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        margin-bottom: calc(16px + (64 - 16) * ((100vw - 320px) / (1368 - 320)));
    }
`;

export const Body = styled.div`
    position: relative;
`;

export const Backdrop = styled.img`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: auto;
    object-fit: cover;
`;

export const Content = styled.div`
    position: absolute;
    width: 100%;
    z-index: 3;
    bottom: 0px;
    left: 0px;
    margin-bottom: 56px;
    color: ${({ theme }) => theme.colors.white};

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        margin-bottom: calc(9px + (56 - 9) * ((100vw - 320px) / (1368 - 320)));
    }
`;

export const Title = styled.h3`
    font-weight: 600;
    font-size: 64px;
    margin-bottom: 25px;
    margin-top: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        margin-bottom: calc(2px + (25 - 2) * ((100vw - 320px) / (1368 - 320)));
        font-size: calc(24px + (64 - 24) * ((100vw - 320px) / (1368 - 320)));
    }
`;

export const RatingBody = styled.div`

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: flex;
        align-items: center;
    }
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        margin: 0px 8px 0px 0px;
    }
`;

export const Star = styled(star)`
    position: relative;
    z-index: 2;
    height: 40px;
    width: 40px;
    margin-right: 8px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        width: calc(16px + (40 - 16) * ((100vw - 320px) / (1368 - 320)));
        height: calc(16px + (40 - 16) * ((100vw - 320px) / (1368 - 320)));
        margin-right: calc(4px + (8 - 4) * ((100vw - 320px) / (1368 - 320)));
    }
`;

export const Rate = styled.p`
    line-height: 1.3;
    font-size: 16px;
    margin: 0px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        font-size: calc(10px + (16 - 10) * ((100vw - 320px) / (1368 - 320)));
    }
`;

export const Vote = styled.span`
    font-weight: 500;
    font-size: 30px;
    margin-right: 7px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        font-size: calc(14px + (30 - 14) * ((100vw - 320px) / (1368 - 320)));
        margin-right: calc(2px + (7 - 2) * ((100vw - 320px) / (1368 - 320)));
    }
`;

export const Votes = styled.p`
    font-size: 16px; 
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        align-self: flex-end;
        line-height: 1.5;
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        font-size: calc(10px + (16 - 10) * ((100vw - 320px) / (1368 - 320)));
    }
`;



