import { useSelector } from "react-redux";
import { selectGenres } from "../MovieList/movieListSlice";
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
            {genres.map((genre, id) => (
              <Tag key={id}
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
          <Votes>{voteCount} votes</Votes>
        </RatingLine>
      </TextSide>
    </Wrapper >
  );
}
