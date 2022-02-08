import { Wrapper, Poster, Name, Info } from "./styled";

export const PersonTile = ({ poster, name, info }) => {
    return (
        <Wrapper>
            <Poster src={poster} />
            <Name>{name}</Name>
            <Info>{info}</Info>
        </Wrapper>
    )
};