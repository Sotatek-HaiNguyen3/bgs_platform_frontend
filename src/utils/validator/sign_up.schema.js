import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter a email"),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters.")
    .matches(/[a-z]/, "Password must have at least 1 lowercase letter.")
    .matches(/[A-Z]/, "Password must have at least 1 uppercase letter.")
    .matches(
      /(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "Password must have at least 1 number and 1 special character."
    ),
  first_name: Yup.string().required("Names cannot be blank."),
  last_name: Yup.string().required("Names cannot be blank."),
  role: Yup.string().required("Please select a title."),
});
