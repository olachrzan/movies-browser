import { ErrorContainer, ErrorImage, ErrorMessage, HomepageButton } from "./styled";
import image from "./icons/error.svg";

export const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorImage src={image}/>
      <ErrorMessage>Ooops, something went wrong...</ErrorMessage>
      <ErrorMessage smaller>
        Please check your network connection and try again
      </ErrorMessage>
      <HomepageButton to={"/movie"}>Back to homepage</HomepageButton>
    </ErrorContainer>
  );
};
