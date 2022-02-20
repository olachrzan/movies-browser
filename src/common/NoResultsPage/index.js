import image from "../NoResultsPage/icons/no-results.svg";
import { Image } from "./styled";
import { Container } from "../../common/Container";

export const NoResultsPage = () => {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
};
