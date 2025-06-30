import { useFormik } from "formik";
import * as yup from "yup";
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

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
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
});

const useRegister = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useRegister must be in AuthProvider");
  }
  const { signup } = context;
  return useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await signup(values);
    },
  });
};

export default useRegister;
