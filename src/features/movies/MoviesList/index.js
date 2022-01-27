import { MovieTile } from "../MovieTile";
import { Wrapper } from "./styled";

export const MoviesList = () => {
  const listLength = 8;
  return (
    <Wrapper>
      {[...Array(listLength)].map((element, index) => <MovieTile key={index} />)}
    </Wrapper>
  )
};