import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/, "Email must be a valid Noroff student email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
