import { useLocation } from "react-router-dom";

export const useQueryParameter = (queryParamName) => {
  const { search } = useLocation();

  return new URLSearchParams(search).get(queryParamName);
};
