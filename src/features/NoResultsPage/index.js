import image from "../NoResultsPage/icons/no-results.svg";
import { Image, ImageContainer, NoResultsText } from "./styled";
import Container from "../../common/Container/index";

export const NoResultsPage = ({ title }) => {
  return (
    <Container>
      <NoResultsText>
        Sorry, there are no results for "{title}"
      </NoResultsText>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
    </Container>
  );
};
