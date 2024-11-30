import { useScrollToTop } from "../components/utils";
import { useState } from "react";
import SingleVenuePage from "../components/venue";
import { SingleVenueResponse } from "../components/api/const/interfaces";
import { Helmet } from "react-helmet";

function Venue() {
  useScrollToTop();

  // States for title and description used for meta title and description
  const [title, setTitle] = useState("Holidaze");
  const [description, setDescription] = useState("Discover amazing places to stay at Holidaze.");

  const handleVenueData = (data: SingleVenueResponse) => {
    setTitle(`${data.data.name} - Holidaze`);
    setDescription(`${data.data.description} - Holidaze`);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <SingleVenuePage onSendData={handleVenueData} />
    </>
  );
}

export default Venue;
