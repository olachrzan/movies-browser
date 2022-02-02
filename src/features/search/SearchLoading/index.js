import image from "./icons/icon-spinner.svg";
import { ImageContainer, Loader, LoaderContainer, LoadingText } from "./styled";

export const SearchLoading = ({ title }) => {
  return (
    <LoaderContainer>
      <LoadingText>Search results for "{title}"</LoadingText>
      <ImageContainer>
        <Loader src={image} />
      </ImageContainer>
    </LoaderContainer>
  );
};
