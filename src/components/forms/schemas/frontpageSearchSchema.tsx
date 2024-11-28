import * as yup from "yup";

export const frontpageSearchSchema = yup.object().shape({
  location: yup.string().required("Destination is required"),
  dateFrom: yup
    .string()
    .required("Arrival date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (yyyy-mm-dd)"),
  dateTo: yup
    .string()
    .required("Departure date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (yyyy-mm-dd)"),
  guests: yup
    .number()
    .required("Number of guests is required")
    .transform((_, originalValue) => (originalValue === "" ? undefined : Number(originalValue))),
});
