import styled from "styled-components";
import { ReactComponent as star } from "../../star.svg";

export const Wrapper = styled.section`
    position: relative;
    margin-bottom: 64px;
    
    &:after{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: linear-gradient(270deg, #000000 19.32%, rgba(0, 0, 0, 0.873268) 19.08%, rgba(0, 0, 0, 0.720529) 18.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 22.88%, rgba(0, 0, 0, 0) 26.68%), linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 16.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 17.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
    }

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
        margin-bottom: calc(16px + (64 - 16) * ((100vw - 320px) / (1368 - 320)));
    }
`;

export const Body = styled.div`
    position: relative;
`;

export const Backdrop = styled.img`
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
    z-index: 2;
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



