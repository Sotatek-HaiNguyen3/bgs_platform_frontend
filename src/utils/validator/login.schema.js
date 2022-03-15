import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Invalid password.")
    .max(16, "Invalid password.")
    .required("Please enter a password."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter a email")
    .max(255, "Please enter a valid email address."),
});

export { LoginSchema };
