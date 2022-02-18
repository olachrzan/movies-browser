import image from "../NoResultsPage/icons/no-results.svg";
import { Image } from "./styled";
import { Container } from "../../common/Container";
import { Title } from "../Tile/styled";
import { useQueryParameter } from "../useQueryParameter";

export const NoResultsPage = () => {
  const search = useQueryParameter("search");
  return (
    <Container>
      <Title>Sorry, there are no results for "{search}"</Title>
      <Image src={image} />
    </Container>
  );
};
