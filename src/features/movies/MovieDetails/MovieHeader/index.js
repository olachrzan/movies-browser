import { useSelector } from "react-redux";
import Container from "../../../../common/Container";
import { apiUrlImage } from "../../../apiData";
import { selectMovieDetails } from "../movieDetailsSlice";
import {
  Wrapper,
  Body,
  Backdrop,
  Content,
  Title,
  RatingBody,
  Rating,
  Star,
  Rate,
  Vote,
  Votes
} from "./styled";


export const MovieHeader = () => {
  const movieDetails = useSelector(selectMovieDetails);

  return (
    <Wrapper>
      <Container>
        < Body >
          <Backdrop src={`${apiUrlImage}w1280/${movieDetails.backdrop_path}`} />
          <Content>
            <Title>{movieDetails.original_title}</Title>
            <RatingBody>
              <Rating>
                <Star />
                <Rate>
                  <Vote>{movieDetails.vote_average}</Vote>/ 10
                </Rate>
              </Rating>
              <Votes>{movieDetails.vote_count} votes</Votes>
            </RatingBody>
          </Content>
        </Body>
      </Container>
    </Wrapper >
  );
}