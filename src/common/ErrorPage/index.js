import { ErrorContainer, ErrorImage, ErrorMessage, HomepageButton } from "./styled";
import image from "./icons/error.svg";
import { useQueryParameter } from "../../queryParameters";
import { useSelector } from "react-redux";
import { selectTotalMoviesPages } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";
import { useLocation } from "react-router";
import { totalPagesForLists } from "../../features/totalPagesForLists";

export const ErrorPage = () => {
  const page = useQueryParameter("page");
  const { pathname } = useLocation();
  const totalPage = useSelector(
    pathname === "/movie" ? selectTotalMoviesPages : selectPeopleTotalPage
  );
  const totalCurrentPage = totalPage > totalPagesForLists ? totalPagesForLists : totalPage;

  return (
    <ErrorContainer>
      <ErrorImage src={image} />
      <ErrorMessage>Ooops, something went wrong...</ErrorMessage>
      <ErrorMessage smaller>
        {page && page <= 0 || page && page > totalCurrentPage
          ? "It looks like the page you're looking for doesn't exist"
          : "Please check your network connection and try again"
        }
      </ErrorMessage>
      <HomepageButton to={"/"}>Back to homepage</HomepageButton>
    </ErrorContainer>
  );
};
