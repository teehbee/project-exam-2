import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a valid Noroff student email")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});
