import image from "../NoResultsPage/icons/no-results.svg";
import { Image, NoResultsText } from "./styled";
import Container from "../../common/Container";

export const NoResultsPage = ({ title }) => {
  return (
    <Container>
      <NoResultsText>Sorry, there are no results for "{title}"</NoResultsText>
      <Image src={image} />
    </Container>
  );
};
