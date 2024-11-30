import { SingleVenueResponse } from "../../api/const/interfaces";

// Function for adding api data to variables ready for use in helmet for meta title and description

export const handleVenueMetaData = (data: SingleVenueResponse, setTitle: (title: string) => void, setDescription: (description: string) => void) => {
  setTitle(`${data.data.name} - Holidaze`);
  setDescription(`${data.data.description} - Holidaze`);
};
