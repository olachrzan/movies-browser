import { Wrapper, Poster, Name } from "./styled";

export const PersonTile = ({ poster, name }) => {
  return (
    <Wrapper>
      <Poster src={poster} />
      <Name>{name}</Name>
    </Wrapper>
  )
};