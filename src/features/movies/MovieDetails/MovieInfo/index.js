import { useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { MovieTile } from "../../MovieTile";
import { apiUrlImage } from "../../../apiData";
import { selectMovieDetails } from "../movieDetailsSlice";

export const MovieInfo = () => {
  const movieDetails = useSelector(selectMovieDetails);

  return (
    <Wrapper>
      {movieDetails && movieDetails.length !== 0 &&
        < MovieTile movieInfo
          poster={`${apiUrlImage}w342/${movieDetails.poster_path}`}
          title={movieDetails.original_title}
          year={(movieDetails.release_date).slice(0, 4)}
          production={"Production:"}
          productionInfo={
            (movieDetails.production_countries.map(
              (item) => item = item.name).slice(0, 2).join(", "))
          }
          release={"Release date:"}
          releaseInfo={movieDetails.release_date}
          genres={movieDetails.genres.map((genre) => genre = genre.id)}
          rating={movieDetails.vote_average}
          ratingTotal={"/10"}
          voteCount={movieDetails.vote_count}
          overview={movieDetails.overview}
        />
      }
    </Wrapper>
  )
};