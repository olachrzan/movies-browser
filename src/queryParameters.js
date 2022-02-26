import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  return ({ key, value }) => {
    if (value === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    navigate({
      pathname: location.pathname,
      search: searchParams.toString()
    });
  }
};

