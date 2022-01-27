import { Poster, Rating, RatingLine, Star, Tag, TagsLine, TextSide, Title, Votes, Wrapper, Year } from "./styled";
import poster from "./poster.jpg";

export const MovieTile = () => (
  <Wrapper>
    <Poster src={poster} alt="poster" />
    <TextSide>
      <Title>Mulan</Title>
      <Year>2020</Year>
      <TagsLine>
        <Tag>Action</Tag>
        <Tag>Adventure</Tag>
        <Tag>Drama</Tag>
      </TagsLine>
      <RatingLine>
        <Star />
        <Rating>7,8</Rating>
        <Votes>35 votes</Votes>
      </RatingLine>
    </TextSide>
  </Wrapper>
)