import styled, { css } from "styled-components";
import { ReactComponent as star } from "../star.svg";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.tileBoxShadow};
  border-radius: 5px;
  display: flex;
  flex: 1 1 324px;
  flex-direction: column;
  height: 100%;

    &:after{
      content:'';
      position:absolute;
      top: 0;
      left: 0;
      width: 100%;
      height:100%;
      background: ${({ theme }) => theme.colors.headerBackground};
      opacity: 0;
    }
  
  &:hover:after{
    transition: opacity 0.3s;
    opacity: 0.6;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    flex-direction: row;
  }

  ${({ big }) => big && css`
    display: block;
    min-height: 500px;

    &:hover:after{
    opacity: 0;
  }

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      min-height: calc(201px + (500 - 201) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 40%;
  }

  ${({ big }) => big && css`
    width: 312px;
    float: left;
    margin-right: 40px;
    margin-bottom: 5px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      width: calc(114px + (312 - 114) * ((100vw - 320px) / (1368 - 320)));
      margin-right: calc(16px + (40 - 16) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    margin-left: 16px;
  }

  ${({ big }) => big && css`
    display: block;

    @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
      margin-left: 0px;
    }
  `}
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

  ${({ big }) => big && css`
    font-size: 36px;
    margin-top: 8px;
    margin-bottom: 24px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      font-size: calc(16px + (36 - 16) * ((100vw - 320px) / (1368 - 320)));
      margin-bottom: calc(1px + (36 - 4) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;

export const Year = styled.p`
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

  ${({ big }) => big && css`
    font-size: 22px;
    margin-bottom: 24px;
    line-height: 1.1;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      font-size: calc(13px + (22 - 13) * ((100vw - 320px) / (1368 - 320)));
      margin-bottom: calc(4px + (24 - 4) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;

export const LabelWrapper = styled.div`
  display: none;

  ${({ big }) => big && css`
    display: flex;
    align-items: center;
    margin: 0px 0px 8px 0px;

    &:last-child{
      margin:0px
    }
  `}
`;

export const Label = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.labelColor};
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const LabelInfo = styled.p`
  font-size: 18px;
  margin: 0px;

  @media(max-width:${({ theme }) => theme.breakpoints.container}){
    font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1368 - 320)));
  }
`;

export const TagsLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  ${({ big }) => big && css`
    margin-top: 16px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      margin-top: calc(2px + (16 - 2) * ((100vw - 320px) / (1368 - 320)));
      gap: calc(4px + (8 - 4) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
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

  ${({ big }) => big && css`

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      font-size: calc(10px + (14 - 10) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;

export const RatingLine = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-end;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.larger}) {
    flex: 1 1 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    gap: 8px;
  }

  ${({ big }) => big && css`
    margin-top: 27px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      margin-top: calc(12px + (27 - 12) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
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

  ${({ big }) => big && css`
    font-size: 22px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      font-size : calc(13px + (22 - 13) * ((100vw - 320px) / (1368 - 320)));
    }
  `}    
`;

export const RatingTotal = styled.span`
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: none;
  }
`;

export const Votes = styled(Rating)`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grayText};

  ${({ big }) => big && css`
     font-size: 14px;

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      font-size : calc(13px + (14 - 13) * ((100vw - 320px) / (1368 - 320)));
    }
  `}  
`;

export const Overview = styled.p`
  position: absolute;
  z-index:2;
  bottom: 0;
  left: 0;
  transform: translateY(120%);
  padding: 16px;
  transition: transform .4s;
  background: white;
  color: ${({ theme }) => theme.colors.darkText};
  border-radius: 5px;
  line-height: 1.2;
  font-weight: 500;

  ${Wrapper}:hover & {
    transform: translateY(0);
  }

  ${({ big }) => big && css`
    position: relative;
    display: block;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    margin-top: 24px;
    margin-bottom: 0px;
    padding: 0px 10px 0px 0px;
    transform: translateY(0);
    background: transparent;
    color: ${({ theme }) => theme.colors.darkText};

    @media(max-width:${({ theme }) => theme.breakpoints.container}){
      font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1368 - 320)));
      margin-top: calc(10px + (24 - 10) * ((100vw - 320px) / (1368 - 320)));
    }
  `}
`;