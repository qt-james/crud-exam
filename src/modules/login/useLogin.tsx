import { useFormik } from "formik";
import * as yup from "yup";
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(EMAIL_REGEX, "Enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      PWD_REGEX,
      "Password must be 8-24 characters, and include uppercase, lowercase, number, and special character"
    ),
});
const useLogin = () => {
  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
};

export default useLogin;
