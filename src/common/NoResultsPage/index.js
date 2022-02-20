import image from "../NoResultsPage/icons/no-results.svg";
import { Image } from "./styled";
import { Title } from "../../common/Title/styled";
import { useQueryParameter } from "../../queryParameters";

export const NoResultsPage = () => {
  const query = useQueryParameter("search");

  return (
    <>
      <Title>Sorry, there are no results for "{query[0].toUpperCase()}{query.slice(1)}"</Title>
      <Image src={image} />
    </>
  );
};
