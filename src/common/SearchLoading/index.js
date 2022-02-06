import { Container } from "../Container"
import { Loader } from "../Loader";
import { Title } from "../Title/styled";

export const SearchLoading = ({ title }) => {
  return (
    <Container>
      <Title>Search results for "{title}"</Title>
      <Loader />
    </Container>
  );
};