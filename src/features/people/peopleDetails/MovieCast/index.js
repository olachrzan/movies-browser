import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Section } from "../../../../common/section";
import { Title } from "../../../../common/Title/styled";
import { selectPeopleCast } from "../peopleDetailsSlice";
import { Wrapper } from "../../../movies/MovieList/styled";
import { Tile } from "../../../../common/Tile";
import { WrapperLink } from "../../../../common/wrapperLink";
import posterError from "../../../../images/posterError.png";
import { apiUrlImage } from "../../../apiData";

export const MovieCast = () => {
  const cast = useSelector(selectPeopleCast).slice(0, 8);

  return (
    <Section >
      {
        !!cast.length &&
        <>
          <Title movie>Movies - cast ({cast.length})</Title>
          <Wrapper>
            {[...cast].map((movie) => {
              return <WrapperLink key={nanoid()} to={`/movie/${movie.id}`} >
                <Tile
                  poster={
                    movie.poster_path
                      ? `${apiUrlImage}w500/${movie.poster_path}` //here we need to change the image for mobile phones
                      : posterError
                  }
                  title={movie.title}
                  year={movie.release_date ? (movie.release_date).slice(0, 4) : ""}
                  genres={movie.genre_ids ? movie.genre_ids : ""}
                  rating={movie.vote_average}
                  voteCount={movie.vote_count}
                  overview={movie.overview}
                />
              </WrapperLink>
            })}
          </Wrapper>
        </>
      }
    </Section>
  )
};