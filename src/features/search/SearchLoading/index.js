import image from "./icons/icon-spinner.svg";
import { ImageContainer, Loader, LoadingText } from "./styled";
import Container from "../../../common/Container/"

export const SearchLoading = ({ title }) => {
  return (
    <Container>
      <LoadingText>Search results for "{title}"</LoadingText>
      <ImageContainer>
        <Loader src={image} />
      </ImageContainer>
    </Container>
  );
};
