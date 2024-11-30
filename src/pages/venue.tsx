import { useScrollToTop } from "../components/utils";
import { useState } from "react";
import SingleVenuePage from "../components/venue";
import { SingleVenueResponse } from "../components/api/const/interfaces";
import { Helmet } from "react-helmet";
import { handleVenueMetaData } from "../components/utils";

function Venue() {
  useScrollToTop();

  // States for title and description used for meta title and description
  const [title, setTitle] = useState("Holidaze");
  const [description, setDescription] = useState("Discover amazing places to stay at Holidaze.");

  const handleData = (data: SingleVenueResponse) => {
    handleVenueMetaData(data, setTitle, setDescription);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <SingleVenuePage onSendData={handleData} />
    </>
  );
}

export default Venue;
