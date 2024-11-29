import * as yup from "yup";

export const createVenueSchema = yup.object().shape({
  name: yup.string().required("Please enter name of venue"),
  location: yup.object().shape({
    city: yup.string().required("Please enter city where venue is located"),
    country: yup.string().required("Please enter country where venue is located"),
  }),
  description: yup.string().required("Please enter description of venue"),
  media: yup.array().of(
    yup.object().shape({
      url: yup.string().required("Image URL is required"),
      alt: yup.string(),
    })
  ),
  price: yup
    .number()
    .required("Price per night is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
  maxGuests: yup
    .number()
    .required("Max number of guests is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue)))
    .min(1, "Number of guests must be at least 1"),
  rating: yup
    .number()
    .required("Star rating is required, if no star rating is deserved, give yourself a zero.")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue)))
    .min(0, "Number of guests must be at least 1"),
  wifi: yup.boolean(),
  parking: yup.boolean(),
  breakfast: yup.boolean(),
  pets: yup.boolean(),
});
