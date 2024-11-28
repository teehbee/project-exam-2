import * as yup from "yup";

export const venuesSearchSchema = yup.object().shape({
  location: yup.string(),
  name: yup.string(),
  fromDate: yup.date(),
  dateTo: yup.date(),
  guests: yup.number().transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
});
