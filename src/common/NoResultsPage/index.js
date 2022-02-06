import image from "../NoResultsPage/icons/no-results.svg";
import { Image } from "./styled";
import Container from "../../common/Container";
import { Title } from "../../common/Title/styled";

export const NoResultsPage = ({ title }) => {
  return (
    <Container>
      <Title>Sorry, there are no results for "{title}"</Title>
      <Image src={image} />
    </Container>
  );
};
