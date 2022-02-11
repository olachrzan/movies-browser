import { useSelector } from "react-redux";
import { Section } from "../../../../common/section";
import { Tile } from "../../../../common/Tile";
import { apiUrlImage } from "../../../apiData";
import { selectPeopleDetails } from "../peopleDetailsSlice";

export const PersonInfo = () => {
  const personDetails = useSelector(selectPeopleDetails);

  return (
    <Section person>
      {personDetails && personDetails.length !== 0 &&
        < Tile movieInfo person
          poster={`${apiUrlImage}w500/${personDetails.profile_path}`}
          title={personDetails.name}
          label={"Date of birth: "}
          labelInfo={personDetails.birthday !== 0
            ? personDetails.birthday
            : "Unknown"
          }
          nextLabel={"Place of birth:"}
          nextLabelInfo={personDetails.place_of_birth ? personDetails.place_of_birth : "Unknown"}
          overview={personDetails.biography}
        />
      }
    </Section>
  )
};