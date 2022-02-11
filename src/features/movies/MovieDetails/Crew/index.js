import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieDetailsSlice";
import { Section } from "../../../../common/section";
import { Title } from "../../../../common/Title/styled";
import { Wrapper } from "../Wrapper";
import { WrapperLink } from "../../../../common/wrapperLink";
import { PersonTile } from "../../../../common/PersonTile";
import { apiUrlImage } from "../../../apiData";
import posterError from "../../../people/PersonTile/posterError.jpg";

export const Crew = () => {
  const movieCrew = useSelector(selectMovieCrew);

  return (
    <Section last>
      {movieCrew.length !== 0 &&
        <>
          <Title movie last>Crew</Title>
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
        </>
      }
    </Section>
  )
}; 