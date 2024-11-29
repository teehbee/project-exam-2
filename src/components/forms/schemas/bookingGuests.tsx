import * as Yup from "yup";

export const bookingGuestsSchema = Yup.object().shape({
  guests: Yup.number().typeError("Must be a number").required("Number of guests is required for booking").min(1, "Must be at least 1"),
});
