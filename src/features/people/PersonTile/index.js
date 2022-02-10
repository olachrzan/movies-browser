import { Wrapper, Poster, Name, Info } from "./styled";

export const PersonTile = ({ poster, name, info, large }) => {
    return (
        <Wrapper>
            <Poster src={poster} />
            <Name>{name}</Name>
            <Info big={large}>{info}</Info>
        </Wrapper>
    )
};