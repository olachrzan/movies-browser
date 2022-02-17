import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { selectTotalPages } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";


export const useReplacePageParameter = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const pageParams = new URLSearchParams(search);
  const totalPage = useSelector(
    pathname === "/movie" ? selectTotalPages : selectPeopleTotalPage
  );
  const pageParamName = "page";

  return ({ value }) => {
    if (value === undefined || value > totalPage) {
      pageParams.set(pageParamName, 1);
    } else {
      pageParams.set(pageParamName, value);
    }
    navigate(`${pathname}?${pageParams.toString()}`);
  }
};