import { Rating, RatingLine, Tag, TagsLine, Title, Votes, Wrapper, Year } from "./styled";
import poster from "./poster.jpg";
import { ReactComponent as Star } from "./star.svg";

export const MovieTile = () => (
  <Wrapper>
    <img src={poster} alt="poster" />
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
  </Wrapper>
)