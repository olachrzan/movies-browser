import { ErrorContainer, ErrorImage, ErrorMessage, HomepageButton } from "./styled";
import image from "./icons/error.svg";
import { useQueryParameter } from "../../queryParameters";
import { useSelector } from "react-redux";
import { selectTotalMoviesPages } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";
import { useLocation } from "react-router";

export const ErrorPage = () => {
  const page = useQueryParameter("page");
  const {pathname} = useLocation();
  const totalPage = useSelector(
    pathname === "/movie" ? selectTotalMoviesPages : selectPeopleTotalPage
  );
  const totalCurrentPage = totalPage > 500 ? 500 : totalPage;

  return (
    <ErrorContainer>
      <ErrorImage src={image} />
      <ErrorMessage>Ooops, something went wrong...</ErrorMessage>
      <ErrorMessage smaller>
        {page <= 0 || page > totalCurrentPage
          ? "It looks like the page you're looking for doesn't exist"
          : "Please check your network connection and try again"
        }
      </ErrorMessage>
      <HomepageButton to={"/"}>Back to homepage</HomepageButton>
    </ErrorContainer>
  );
};
