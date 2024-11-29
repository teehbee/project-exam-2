import * as yup from "yup";

export const updateProfileSchema = yup.object().shape({
  url: yup.string().optional(),
  bio: yup.string().optional(),
  venueManager: yup.boolean().optional(),
});
