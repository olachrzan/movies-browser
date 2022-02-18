import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { selectTotalMoviesPages } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";


export const useReplacePageParameter = () => {

    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    const pageParams = new URLSearchParams(search);
    const totalPage = 500;
    const pageParamName = "page";

    return (value) => {
        if (value === undefined || value > totalPage) {
            pageParams.delete(pageParamName);
        } else {
            pageParams.set(pageParamName, value);
        }
        navigate(`${pathname}?${pageParams.toString()}`);
    }
};