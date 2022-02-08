import { useSelector } from "react-redux";
import { selectMovieCast } from "../movieDetailsSlice";
import { StyledCast } from "./styled";
import { Wrapper } from "../Wrapper";
import { PersonTile } from "../../../people/PersonTile";
import { WrapperLink } from "../../../../common/wrapperLink";
import { apiUrlImage } from "../../../apiData";
import posterError from "../../../people/PersonTile/posterError.jpg";
import { Title } from "../../../../common/Title/styled";

export const Cast = () => {
  const movieCast = useSelector(selectMovieCast);

  return (
    <StyledCast>
      <Title movie>Cast</Title>
      <Wrapper>
        {movieCast && [...movieCast].slice(0, 12).map((person) => {
          return (
            <WrapperLink key={person.id} to={`/people/${person.id}`}>
              <PersonTile
                poster={
                  person.profile_path
                    ? `${apiUrlImage}w342/${person.profile_path}`
                    : posterError
                }
                name={person.name}
                info={person.character}
              />
            </WrapperLink>
          )
        })}
      </Wrapper>
    </StyledCast>
  )
};
