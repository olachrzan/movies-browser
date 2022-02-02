import { ErrorContainer, ErrorImage, ErrorMessage, HomepageButton } from "./styled";
import image from "./icons/error.svg";

export const SearchError = () => {
  return (
    <ErrorContainer>
      <ErrorImage src={image}/>
      <ErrorMessage>Ooops, something went wrong...</ErrorMessage>
      <ErrorMessage smaller>
        Please check your network connection and try again
      </ErrorMessage>
      <HomepageButton>Back to homepage</HomepageButton>
    </ErrorContainer>
  );
};
