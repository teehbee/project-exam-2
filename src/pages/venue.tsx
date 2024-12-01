import { useScrollToTop } from "../components/utils";
import { useState } from "react";
import SingleVenuePage from "../components/venue";
import { SingleVenueResponse } from "../components/api/const/interfaces";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { handleVenueMetaData } from "../components/utils";

function Venue() {
  useScrollToTop();

  // States for title and description used for meta title and description
  const [title, setTitle] = useState("Holidaze");
  const [description, setDescription] = useState("Discover amazing places to stay at Holidaze.");

  // Handler for dynamic meta data for single venues
  const handleData = (data: SingleVenueResponse) => {
    handleVenueMetaData(data, setTitle, setDescription);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      </HelmetProvider>
      <SingleVenuePage onSendData={handleData} />
    </>
  );
}

export default Venue;
