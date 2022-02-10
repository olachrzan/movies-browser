import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieDetailsSlice";
import { StyledCrew } from "./styled";
import { Title } from "../../../../common/Title/styled";
import { Wrapper } from "../Wrapper";
import { WrapperLink } from "../../../../common/wrapperLink";
import { PersonTile } from "../../../people/PersonTile";
import { apiUrlImage } from "../../../apiData";
import posterError from "../../../people/PersonTile/posterError.jpg";

export const Crew = () => {
  const movieCrew = useSelector(selectMovieCrew);

  return (
    <StyledCrew>
      <Title movie>Crew</Title>
      <Wrapper>
        {movieCrew && [...movieCrew].slice(0, 12).map((person, index) => {
          return (
            <WrapperLink key={index} to={`/people/${person.id}`}>
              <PersonTile large
                poster={
                  person.profile_path
                    ? `${apiUrlImage}w342/${person.profile_path}`
                    : posterError
                }
                name={person.name}
                info={person.job}
              />
            </WrapperLink>
          )
        })}
      </Wrapper>
    </StyledCrew>
  )
}; 