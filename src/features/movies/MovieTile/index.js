import { useSelector } from "react-redux";
import { selectGenres } from "../MoviesList/movieListSlice";
import {
  Poster,
  Rating,
  RatingLine,
  Star,
  Tag,
  TagsLine,
  TextSide,
  Title,
  Votes,
  Wrapper,
  Year
} from "./styled";

export const MovieTile = ({ poster, title, year, rating, voteCount, genres }) => {
  const genresList = useSelector(selectGenres);

  return (
    <Wrapper>
      <Poster src={poster} alt="poster" />
      <TextSide>
        <Title>{title}</Title>
        <Year>{year}</Year>
        {genresList.length > 0 &&
          <TagsLine>
            {genres && genres.map((genre, index) => (
              <Tag key={index}
              >
                {[...genresList].find((item) => item.id === genre).name}
              </Tag>
            ))
            }
          </TagsLine>
        }
        <RatingLine>
          <Star />
          <Rating>{rating}</Rating>
          <Votes> <span>{voteCount}</span> votes</Votes>
        </RatingLine>
      </TextSide>
    </Wrapper >
  )
};