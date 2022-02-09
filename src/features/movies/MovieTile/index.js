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
  Year,
  LabelWrapper,
  Label,
  LabelInfo,
  RatingTotal,
  Overview
} from "./styled";

export const MovieTile = ({
  poster,
  title,
  year,
  production,
  productionInfo,
  release,
  releaseInfo,
  rating,
  voteCount,
  genres,
  movieInfo,
  ratingTotal,
  overview
}) => {
  const genresList = useSelector(selectGenres);

  return (
    <Wrapper big={movieInfo}>
      <Poster big={movieInfo} src={poster} alt="poster" />
      <TextSide big={movieInfo}>
        <Title big={movieInfo}>{title}</Title>
        <Year big={movieInfo}>{year}</Year>
        <LabelWrapper big={movieInfo}>
          <Label>{production}</Label>
          <LabelInfo>{productionInfo}</LabelInfo>
        </LabelWrapper>
        <LabelWrapper big={movieInfo}>
          <Label>{release}</Label>
          <LabelInfo>{releaseInfo}</LabelInfo>
        </LabelWrapper>
        {genresList.length > 0 &&
          <TagsLine big={movieInfo}>
            {genres && genres.map((genre, index) => (
              <Tag big={movieInfo} key={index}
              >
                {[...genresList].find((item) => item.id === genre).name}
              </Tag>
            ))
            }
          </TagsLine>
        }
        <RatingLine big={movieInfo}>
          <Star />
          <Rating big={movieInfo}>{rating}</Rating>
          <RatingTotal>{ratingTotal}</RatingTotal>
          <Votes big={movieInfo}>{voteCount} votes</Votes>
        </RatingLine>
        <Overview big={movieInfo}>{overview}</Overview>
      </TextSide>
    </Wrapper >
  )
};
