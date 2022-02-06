import { LoadingText } from "./styled";
import { Container } from "../Container"
import { Loader } from "../Loader";

export const SearchLoading = ({ title }) => {
  return (
    <Container>
      <LoadingText>Search results for "{title}"</LoadingText>
      <Loader />
    </Container>
  );
};