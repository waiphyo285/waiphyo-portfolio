import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(3, "Name must be at least 3 characters"),

  email: Yup.string()
    .required("Email is a required field")
    .email("Email is invalid format"),

  message: Yup.string()
    .required("Message is a required field")
    .min(100, "Username must be at least 100 characters"),
});
