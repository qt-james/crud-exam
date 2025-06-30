import { useFormik } from "formik";
import * as yup from "yup";
import { AuthContext } from "@/context/AuthProvider";
import { useContext } from "react";

const validationSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
const useLogin = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useLogin must be in AuthProvider");
  }
  const { login } = context;
  return useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });
};

export default useLogin;
